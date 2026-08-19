import Link from "next/link";

export default function LanguageSwitcher({
  current,
}: {
  current: "es" | "en";
}) {
  return (
    <div className="language-switcher">
      <Link
        href="/"
        className={current === "es" ? "active" : ""}
      >
        ES
      </Link>

      <span>|</span>

      <Link
        href="/en"
        className={current === "en" ? "active" : ""}
      >
        EN
      </Link>
    </div>
  );
}