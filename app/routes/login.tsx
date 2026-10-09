// Страница входа: форма с email и паролем.
// На этапе интерфейса отправка формы только имитируется (useState).

import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/login";
import Button from "~/components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Вход — Манчкин-пикер" }];
}

export default function Login() {
  // значения полей формы
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); // не перезагружаем страницу
    // здесь позже будет запрос к серверу авторизации
    alert(`Вход: ${email || "email не указан"}`);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white border border-line rounded-lg p-8">
        {/* логотип */}
        <div className="text-center">
          <span className="inline-grid place-items-center w-11 h-11 rounded-lg bg-accent text-white text-xl font-bold">
            М
          </span>
          <h1 className="text-xl font-bold mt-3">Манчкин-пикер</h1>
          <p className="text-muted text-sm mt-1">
            Войдите, чтобы вести коллекцию и звать друзей
          </p>
        </div>

        {/* переключатель Вход / Регистрация */}
        <div className="grid grid-cols-2 gap-2 mt-6">
          <span className="h-10 rounded-md bg-soft border border-accent text-accent text-sm font-bold grid place-items-center">
            Вход
          </span>
          <Link
            to="/signup"
            className="h-10 rounded-md bg-white border border-muted/40 text-muted text-sm grid place-items-center hover:bg-chip"
          >
            Регистрация
          </Link>
        </div>

        <form onSubmit={submit} className="mt-5 space-y-4">
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
              placeholder="••••••••"
              className="mt-1 w-full h-11 px-3 rounded-md border border-muted/40 text-sm outline-none focus:border-accent"
            />
          </label>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#4066b0]" />
              Запомнить меня
            </label>
            <a href="#" className="text-accent">Забыли пароль?</a>
          </div>

          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>

        <p className="text-center text-xs text-muted mt-5">
          Нет аккаунта?{" "}
          <Link to="/signup" className="text-accent font-bold">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}
