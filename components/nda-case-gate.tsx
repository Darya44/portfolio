"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";

const NDA_CYAN = "#55eaff";
const NDA_PASSWORD = "123";
const NDA_ACCESS_KEY = "sber-case-access";

type NdaCaseGateProps = {
  children: ReactNode;
};

export function NdaCaseGate({ children }: NdaCaseGateProps) {
  const [isReady, setIsReady] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setIsUnlocked(window.sessionStorage.getItem(NDA_ACCESS_KEY) === "true");
    setIsReady(true);
  }, []);

  const unlock = () => {
    window.sessionStorage.setItem(NDA_ACCESS_KEY, "true");
    setIsUnlocked(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === NDA_PASSWORD) {
      unlock();
      return;
    }

    setError("Неверный пароль");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError("");
  };

  if (!isReady) {
    return (
      <div className="grid min-h-[60vh] place-items-center text-white/60">
        <span>Загрузка...</span>
      </div>
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="grid min-h-[70vh] place-items-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="relative w-[352px] max-w-full rounded-[22px] border bg-[#0b5e68]/45 px-[32px] pb-[20px] pt-[21px] text-center text-white shadow-[inset_0_0_42px_rgba(85,234,255,0.22),0_0_44px_rgba(85,234,255,0.28),0_22px_70px_rgba(0,0,0,0.48)] backdrop-blur-[14px] sm:px-[43px]"
        style={{ borderColor: NDA_CYAN }}
      >
        <div
          className="mx-auto grid h-[57px] w-[57px] place-items-center rounded-full border bg-[#0b7684]/[0.32] shadow-[0_0_26px_rgba(85,234,255,0.64)]"
          style={{ borderColor: NDA_CYAN }}
        >
          <svg aria-hidden="true" viewBox="0 0 34 34" className="h-[31px] w-[31px]">
            <path
              d="M10 15V12.2C10 7.9 12.8 5.2 17 5.2C21.2 5.2 24 7.9 24 12.2V15"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <rect x="8.5" y="14" width="17" height="15" rx="3" fill="white" />
            <circle cx="17" cy="20.2" r="1.8" fill="#0b5e68" />
            <path d="M17 21.7V25" stroke="#0b5e68" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
        </div>

        <h2 className="mt-[17px] text-[20px] font-semibold leading-none text-white">Введите пароль</h2>
        <p className="mt-[8px] text-[13px] leading-tight text-white/[0.58]">
          Этот кейс доступен по запросу
        </p>

        <label className="relative mt-[15px] block">
          <input
            type="password"
            value={password}
            onChange={(event) => handlePasswordChange(event.target.value)}
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
              strokeLinejoin="round"
              strokeWidth="1.6"
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
          <span className="relative">Ввести</span>
        </button>
      </form>
    </div>
  );
}
