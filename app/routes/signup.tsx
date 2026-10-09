// Страница регистрации: никнейм, email и пароль.
// Данные формы хранятся в состояниях (useState).

import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/signup";
import Button from "~/components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Регистрация — Манчкин-пикер" }];
}

export default function Signup() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // здесь позже будет запрос на создание пользователя в БД
    alert(`Аккаунт для «${nickname || "новичок"}» почти готов`);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white border border-line rounded-lg p-8">
        <div className="text-center">
          <span className="inline-grid place-items-center w-11 h-11 rounded-lg bg-accent text-white text-xl font-bold">
            М
          </span>
          <h1 className="text-xl font-bold mt-3">Манчкин-пикер</h1>
          <p className="text-muted text-sm mt-1">
            Аккаунт нужен для коллекции, отзывов и друзей
          </p>
        </div>

        {/* переключатель Вход / Регистрация */}
        <div className="grid grid-cols-2 gap-2 mt-6">
          <Link
            to="/login"
            className="h-10 rounded-md bg-white border border-muted/40 text-muted text-sm grid place-items-center hover:bg-chip"
          >
            Вход
          </Link>
          <span className="h-10 rounded-md bg-soft border border-accent text-accent text-sm font-bold grid place-items-center">
            Регистрация
          </span>
        </div>

        <form onSubmit={submit} className="mt-5 space-y-4">
          <label className="block">
            <span className="text-[10px] font-bold text-muted">НИКНЕЙМ</span>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="как вас звать в игре"
              className="mt-1 w-full h-11 px-3 rounded-md border border-muted/40 text-sm outline-none focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-bold text-muted">EMAIL</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="введите email"
              className="mt-1 w-full h-11 px-3 rounded-md border border-muted/40 text-sm outline-none focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-bold text-muted">ПАРОЛЬ</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="минимум 6 символов"
              className="mt-1 w-full h-11 px-3 rounded-md border border-muted/40 text-sm outline-none focus:border-accent"
            />
          </label>

          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-[#4066b0]" />
            Согласен с правилами сайта
          </label>

          <button
            type="submit"
            className="w-full h-11 rounded-md bg-accent text-white text-sm font-bold hover:bg-accent/90"
          >
            Создать аккаунт
          </button>
        </form>

        <p className="text-center text-xs text-muted mt-5">
          Уже есть аккаунт?{" "}
          <Link to="/login" className="text-accent font-bold">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
