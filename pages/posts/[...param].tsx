import { useRouter } from 'next/dist/client/router';
import React from 'react';

export interface CatchAllPostDetailPageProps {
}

export default function CatchAllPostDetailPage(props: CatchAllPostDetailPageProps) {
    const router = useRouter();

    return (
        <div>
            <h1>Post Detail page</h1>
            <p>Query : {JSON.stringify(router.query) }</p>
        </div>
    );
}
