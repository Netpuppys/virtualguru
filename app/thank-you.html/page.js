'use client';

import Image from 'next/image';
import Head from 'next/head';

export default function ThankYou() {
    return (
        <>
            <Head>
                <title>Thank You</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-400 to-gray-800 p-5">
                <div className="bg-white max-w-lg text-center p-10 rounded-lg shadow-lg">
                    <Image 
                        src="https://virtualguru.online/act-images/thank-you.png" 
                        alt="Thank You" 
                        width={100} 
                        height={100} 
                        priority
                        className="mx-auto mb-5"
                    />
                    <h1 className="text-orange-500 text-2xl font-bold mb-2">Thank You for Your Payment!</h1>
                    <p className="text-gray-800 text-lg mb-4">You are now registered for the <strong>3-Day Accelerated Career Trajectory Webinar.</strong></p>
                    <p className="text-gray-700 text-base mb-6">To receive all updates about the webinar, please join our WhatsApp group below:</p>
                    
                    <a 
                        href="https://chat.whatsapp.com/IVtJvKSsZtsDk4qT5cEa5U" 
                        className="inline-block bg-green-500 text-white font-medium px-6 py-3 rounded-full text-lg transition hover:bg-green-600 mb-5"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Join WhatsApp Group
                    </a>
                    
                    <div className="flex justify-center items-center mt-3">
                        <Image 
                            src="https://virtualguru.online/act-images/whatsapp.png" 
                            alt="WhatsApp QR Code" 
                            width={120} 
                            height={120} 
                            priority
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
