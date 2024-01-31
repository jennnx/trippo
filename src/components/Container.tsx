export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}
