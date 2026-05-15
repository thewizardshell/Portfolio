"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowUp } from "lucide-react";

interface Job {
  date: string;
  image?: string;
  title: string;
  company: string;
  description: string;
  location?: string;
}
interface WorkExperienceProps {
  workExperience: Job[];
}

function isCurrent(d: string) {
  return d.toLowerCase().includes("actualidad");
}

const SIDE_BRANCH = new Set(["Azetheral Technology"]);

// Lane colors — hardcoded so they work in SVG
const C_MAIN   = "#8aad3c";
const C_BRANCH = "#6b5823";

const X_MAIN   = 10;
const X_BRANCH = 28;
const W        = 44;    // gutter width
const NODE_TOP = 22;    // px from top of row to node center
const CURVE_H  = 36;    // height of fork/merge bezier curve area

interface DisplayEntry {
  type: "single" | "grouped";
  lane: "main" | "branch";
  jobs: Job[];
  company: string;
  image?: string;
}

function buildEntries(jobs: Job[]): DisplayEntry[] {
  const seen = new Set<string>();
  const out: DisplayEntry[] = [];
  for (const job of jobs) {
    if (seen.has(job.company)) continue;
    seen.add(job.company);
    const group = jobs.filter((j) => j.company === job.company);
    out.push({
      type: group.length > 1 ? "grouped" : "single",
      lane: SIDE_BRANCH.has(job.company) ? "branch" : "main",
      jobs: group,
      company: job.company,
      image: job.image,
    });
  }
  return out;
}

// ─── Gutter: CSS lines + SVG curves ──────────────────────────────────────────
//
// Layout (top = newest, bottom = oldest):
//   Index 0..branchIdx-1  → main + branch lines run in parallel (branchActive)
//   Index branchIdx       → branch node; fork curve at the TOP of this row
//   Index branchIdx+1..N  → main line only
//
// The fork curve lives at the TOP of the branch entry row.
// branchActive rows have TWO lines (main at X_MAIN, branch at X_BRANCH).
// Below the branch entry only main line.

function Gutter({
  lane,
  isForkRow,
  branchActive,
  isFirst,
  isLast,
}: {
  lane: "main" | "branch";
  isForkRow: boolean;
  branchActive: boolean;  // is the branch line running through this row?
  isFirst: boolean;
  isLast: boolean;
}) {
  const nodeX = lane === "branch" ? X_BRANCH : X_MAIN;

  return (
    <div
      className="relative shrink-0 self-stretch"
      style={{ width: W }}
    >
      {/* ── Main line (always, full height) ─────────────────────────── */}
      <div
        className="absolute"
        style={{
          left: X_MAIN - 1,
          top: isFirst ? NODE_TOP : 0,
          bottom: isLast ? `calc(100% - ${NODE_TOP}px)` : 0,
          width: 2,
          background: C_MAIN,
        }}
      />

      {/* ── Branch line (parallel, runs on rows ABOVE the fork entry) ── */}
      {branchActive && !isForkRow && (
        <div
          className="absolute"
          style={{
            left: X_BRANCH - 1,
            top: isFirst ? NODE_TOP : 0,
            bottom: 0,
            width: 2,
            background: C_BRANCH,
          }}
        />
      )}

      {/* ── Fork curve: at top of the branch entry row ──────────────── */}
      {isForkRow && (
        <>
          {/* Branch line from curve end downward (if not last) */}
          {!isLast && (
            <div
              className="absolute"
              style={{
                left: X_BRANCH - 1,
                top: CURVE_H,
                bottom: 0,
                width: 2,
                background: C_BRANCH,
              }}
            />
          )}
          {/* The curve itself */}
          <svg
            className="absolute top-0 left-0"
            width={W}
            height={CURVE_H}
            style={{ overflow: "visible" }}
          >
            {/* Main line behind the curve */}
            <line
              x1={X_MAIN} y1={0}
              x2={X_MAIN} y2={CURVE_H}
              stroke={C_MAIN} strokeWidth={2}
            />
            {/* Fork bezier from mainX → branchX */}
            <path
              d={`M ${X_MAIN} 4 C ${X_MAIN} ${CURVE_H * 0.8} ${X_BRANCH} ${CURVE_H * 0.2} ${X_BRANCH} ${CURVE_H}`}
              fill="none"
              stroke={C_BRANCH}
              strokeWidth={2}
            />
          </svg>
        </>
      )}

      {/* ── Commit node ─────────────────────────────────────────────── */}
      <div
        className="absolute z-10 rounded-full"
        style={{
          left: nodeX - 5,
          top: NODE_TOP - 5,
          width: 10,
          height: 10,
          background: lane === "branch" ? C_BRANCH : C_MAIN,
          boxShadow: `0 0 0 2.5px #fff, 0 0 0 4px ${lane === "branch" ? C_BRANCH : C_MAIN}`,
        }}
      />
    </div>
  );
}

// ─── Cards ────────────────────────────────────────────────────────────────────
function SingleCard({ entry }: { entry: DisplayEntry }) {
  const job = entry.jobs[0];
  const current = isCurrent(job.date);
  return (
    <div className={`rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow ${current ? "border-primary/30" : ""}`}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex items-start gap-3">
          {entry.image && (
            <Image src={entry.image} alt={entry.company} width={36} height={36}
              className={`w-9 h-9 rounded-lg object-cover border shrink-0 ${current ? "ring-2 ring-primary/40" : ""}`}
              loading="lazy"
            />
          )}
          <div>
            <h3 className="font-semibold text-foreground text-base leading-tight">{job.title}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: entry.lane === "branch" ? C_BRANCH : C_MAIN }}>
              {entry.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
          <Badge variant={current ? "default" : "secondary"} className="text-xs whitespace-nowrap">{job.date}</Badge>
          {job.location && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />{job.location.split(",")[0]}
            </span>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
    </div>
  );
}

function GroupedCard({ entry }: { entry: DisplayEntry }) {
  const hasCurrent = entry.jobs.some((j) => isCurrent(j.date));
  return (
    <div className={`rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden ${hasCurrent ? "border-primary/30" : ""}`}>
      <div className="flex items-center gap-3 px-5 py-4 border-b bg-muted/30">
        {entry.image && (
          <Image src={entry.image} alt={entry.company} width={36} height={36}
            className={`w-9 h-9 rounded-lg object-cover border shrink-0 ${hasCurrent ? "ring-2 ring-primary/40" : ""}`}
            loading="lazy"
          />
        )}
        <span className="font-semibold text-foreground text-base">{entry.company}</span>
        {hasCurrent && <Badge variant="default" className="text-xs ml-auto">Actual</Badge>}
      </div>
      <div className="divide-y">
        {entry.jobs.map((job, i) => {
          const current = isCurrent(job.date);
          return (
            <div key={i} className="px-5 py-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className={`text-sm font-semibold ${current ? "text-foreground" : "text-muted-foreground"}`}>
                    {job.title}
                  </p>
                  {i === 0 && entry.jobs.length > 1 && (
                    <span className="flex items-center gap-0.5 text-xs font-medium" style={{ color: C_MAIN }}>
                      <ArrowUp className="w-3 h-3" /> promovido
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <Badge variant={current ? "default" : "secondary"} className="text-xs whitespace-nowrap">{job.date}</Badge>
                  {job.location && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />{job.location.split(",")[0]}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────
function EntryRow({
  entry,
  index,
  branchIdx,
  total,
}: {
  entry: DisplayEntry;
  index: number;
  branchIdx: number;
  total: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Branch is "active" (runs in parallel on rows ABOVE the fork entry)
  const branchActive = branchIdx !== -1 && index < branchIdx;
  const isForkRow    = index === branchIdx;

  return (
    <motion.div
      ref={ref}
      className="flex gap-2"
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      <Gutter
        lane={entry.lane}
        isForkRow={isForkRow}
        branchActive={branchActive}
        isFirst={index === 0}
        isLast={index === total - 1}
      />

      {/* Card column — offset so card title aligns with the node */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.15 }}
        className="flex-1"
        style={{ paddingTop: NODE_TOP - 9, paddingBottom: 20 }}
      >
        {entry.type === "grouped"
          ? <GroupedCard entry={entry} />
          : <SingleCard entry={entry} />
        }
      </motion.div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });
  const entries    = buildEntries(workExperience);
  const branchIdx  = entries.findIndex((e) => e.lane === "branch");

  return (
    <section className="mb-20 md:mb-28" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="font-display italic text-3xl md:text-4xl font-bold text-foreground mb-10"
      >
        Experiencia
      </motion.h2>

      <div>
        {entries.map((entry, i) => (
          <EntryRow
            key={i}
            entry={entry}
            index={i}
            branchIdx={branchIdx}
            total={entries.length}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
