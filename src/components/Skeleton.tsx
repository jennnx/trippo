export default function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={`animate-pulse rounded-md bg-gray-300 ${className}`}
        ></div>
    );
}
