import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClientProvider} from "react-query";
import {queryClient} from "@/lib/react-query";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
