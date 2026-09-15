"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Project } from "@/data/projects";

const SBER_SLUG = "sber-key-visuals";
const NDA_CYAN = "#55eaff";

type ProjectCardProps = {
  project: Project;
  withNdaGate?: boolean;
};

export function ProjectCard({ project, withNdaGate = false }: ProjectCardProps) {
  const router = useRouter();
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isNdaCase = withNdaGate && project.slug === SBER_SLUG;
  const href = `/work/${project.slug}`;

  const openCase = () => {
    router.push(href);
  };

  const closePassword = () => {
    setIsPasswordOpen(false);
    setPassword("");
    setError("");
  };

  const checkPassword = (value: string) => {
    setPassword(value);
    setError("");

    if (value.trim() === "123") {
      openCase();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === "123") {
      openCase();
      return;
    }

    setError("Неверный пароль");
  };

  const ndaBadge = isNdaCase ? (
      <div
        data-nda-badge
        className="absolute left-[5%] top-[5.4%] z-10 aspect-[222/73] w-[25.8%] min-w-[108px] max-w-[190px] overflow-hidden rounded-[16px] border bg-[#073747]/70 text-white shadow-[inset_0_0_20px_rgba(40,242,220,0.18),0_0_18px_rgba(40,242,220,0.16)] backdrop-blur-md"
        style={{ borderColor: NDA_CYAN }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 222 73"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M34 31V26C34 20 38.9 16 46 16C53.1 16 58 20 58 26V31"
            fill="none"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <rect x="30" y="31" width="32" height="28" rx="4" fill="white" />
          <rect x="82" y="14" width="2" height="45" rx="1" fill="white" opacity="0.75" />
          <text x="109" y="35" fill="white" fontSize="24" fontWeight="700" fontFamily="Arial, sans-serif">
            NDA
          </text>
          <text x="109" y="56" fill="white" opacity="0.7" fontSize="17" fontFamily="Arial, sans-serif">
            by request
          </text>
        </svg>
      </div>
  ) : null;

  const cardContent = (
    <>
      <div className={`relative w-full overflow-hidden ${isNdaCase ? "aspect-[1549/872]" : "aspect-[16/10]"}`}>
        {ndaBadge}
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition duration-300 group-hover:scale-[1.02] ${
            isPasswordOpen ? "scale-[1.02] blur-[2px] brightness-50" : ""
          }`}
        />
      </div>

      <div className={`p-5 text-left transition duration-300 ${isPasswordOpen ? "blur-[1px] brightness-50" : ""}`}>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="text-xs text-white/60">{project.year}</span>
        </div>

        <p className="mt-2 text-sm text-white/70">{project.shortDescription}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (isNdaCase) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10">
        <button
          type="button"
          data-project-card={project.slug}
          onClick={() => {
            setIsPasswordOpen(true);
            setError("");
          }}
          className="group block w-full"
        >
          {cardContent}
        </button>

        {isPasswordOpen ? (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/48 px-5 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nda-password-title"
            onClick={closePassword}
          >
            <form
              onSubmit={handleSubmit}
              onClick={(event) => event.stopPropagation()}
              className="relative w-[352px] max-w-full rounded-[22px] border bg-[#0b5e68]/45 px-[43px] pb-[20px] pt-[21px] text-center text-white shadow-[inset_0_0_42px_rgba(85,234,255,0.22),0_0_44px_rgba(85,234,255,0.28),0_22px_70px_rgba(0,0,0,0.48)] backdrop-blur-[14px]"
              style={{ borderColor: NDA_CYAN }}
            >
              <div
                className="mx-auto grid h-[57px] w-[57px] place-items-center rounded-full border bg-[#0b7684]/[0.32] shadow-[0_0_26px_rgba(85,234,255,0.64)]"
                style={{ borderColor: NDA_CYAN }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 34 34"
                  className="h-[31px] w-[31px]"
                >
                  <path
                    d="M10 15V12.2C10 7.9 12.8 5.2 17 5.2C21.2 5.2 24 7.9 24 12.2V15"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <rect x="8.5" y="14" width="17" height="15" rx="3" fill="white" />
                  <circle cx="17" cy="20.2" r="1.8" fill="#0b5e68" />
                  <path d="M17 21.7V25" stroke="#0b5e68" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>

              <h2 id="nda-password-title" className="mt-[17px] text-[20px] font-semibold leading-none text-white">
                Введите пароль
              </h2>
              <p className="mt-[8px] text-[13px] leading-none text-white/[0.58]">Этот кейс доступен по запросу</p>

              <label className="relative mt-[15px] block">
                <input
                  type="password"
                  value={password}
                  onChange={(event) => checkPassword(event.target.value)}
                  autoFocus
                  aria-label="Пароль"
                  className="h-[45px] w-full rounded-[12px] border bg-[#063f4b]/[0.28] px-[18px] pr-[48px] text-left text-[22px] leading-none text-white caret-[#55eaff] outline-none transition placeholder:text-white/35 focus:bg-[#063f4b]/40"
                  style={{ borderColor: NDA_CYAN }}
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 16"
                  className="absolute right-[17px] top-1/2 h-[16px] w-[24px] -translate-y-1/2 text-white/60"
                >
                  <path
                    d="M2 8C4.6 3.7 7.8 2 12 2C16.2 2 19.4 3.7 22 8C19.4 12.3 16.2 14 12 14C7.8 14 4.6 12.3 2 8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="8" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </label>

              {error ? <p className="mt-3 text-sm text-red-200">{error}</p> : null}

              <button
                type="submit"
                className="relative mt-[14px] h-[45px] w-full cursor-pointer overflow-hidden rounded-[18px] border text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_13px_20px_rgba(255,255,255,0.13),inset_0_-16px_24px_rgba(0,72,82,0.32),0_0_30px_rgba(85,234,255,0.5)] transition hover:brightness-110"
                style={{
                  background:
                    "radial-gradient(ellipse at 10% 50%, rgba(125,255,238,0.72) 0%, rgba(66,231,218,0.46) 34%, transparent 64%), radial-gradient(ellipse at 90% 50%, rgba(125,255,238,0.72) 0%, rgba(66,231,218,0.46) 34%, transparent 64%), linear-gradient(180deg, rgba(80,235,219,0.9) 0%, rgba(30,204,190,0.9) 100%)",
                  borderColor: "rgba(85,234,255,0.58)",
                }}
              >
                <span
                  className="pointer-events-none absolute inset-x-[24px] top-0 h-px bg-white/60"
                  aria-hidden="true"
                />
                <span className="pointer-events-none absolute -left-9 top-1/2 h-[76px] w-[112px] -translate-y-1/2 rounded-full bg-[#89fff0]/35 blur-xl" aria-hidden="true" />
                <span className="pointer-events-none absolute -right-9 top-1/2 h-[76px] w-[112px] -translate-y-1/2 rounded-full bg-[#89fff0]/35 blur-xl" aria-hidden="true" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-[39px] w-[146px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#043b48]/65 blur-md" aria-hidden="true" />
                <span className="relative">Ввести</span>
              </button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10"
    >
      {cardContent}
    </Link>
  );
}
