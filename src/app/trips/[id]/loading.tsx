import Skeleton from "@/components/Skeleton";

export default function Loading() {
    return (
        <div>
            <div className="flex py-16 px-32 max-h-[90vh]">
                <aside className="w-1/2 border-r-2 px-8 pb-24 h-full space-y-8">
                    <Skeleton className="w-full aspect-video" />
                    <div className="space-y-1">
                        <Skeleton className="w-full h-6" />
                        <Skeleton className="w-full h-6" />
                        <Skeleton className="w-2/3 mx-auto h-6" />
                    </div>
                    <Skeleton className="w-3/4 h-8 mx-auto" />
                    <Skeleton className="w-3/5 h-8 mx-auto" />
                    <Skeleton className="w-full h-48" />
                </aside>
                <main className="w-1/2 overflow-y-auto space-y-8 px-8">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="w-full h-48" />
                    ))}
                </main>
            </div>{" "}
        </div>
    );
}
