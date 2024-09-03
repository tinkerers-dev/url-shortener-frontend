import {CheckCircle, Shield, Zap} from 'lucide-react'
import {GuestShortenUrlForm} from "@/urls/GuestShortenUrlForm.tsx";

export const HomePage = () => {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Shorten Your Links
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Create short, easy-to-share links in seconds. Boost your online presence with our
                                powerful URL shortener.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <GuestShortenUrlForm/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                        Why Choose ShortLink?
                    </h2>
                    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                            <Zap className="h-8 w-8 text-blue-500"/>
                            <h3 className="text-xl font-bold">Lightning Fast</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                Create short links in seconds and share them instantly.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                            <Shield className="h-8 w-8 text-blue-500"/>
                            <h3 className="text-xl font-bold">Secure & Reliable</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                Your links are safe with us. We use industry-standard encryption.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                            <CheckCircle className="h-8 w-8 text-blue-500"/>
                            <h3 className="text-xl font-bold">Analytics Included</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                Track your link performance with our built-in analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};