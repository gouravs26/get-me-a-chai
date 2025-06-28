"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchPayment, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
const PaymentPage = ({ username }) => {
    const [paymentform, setpaymentform] = useState({name: "", message: "", amount: 0 })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
// const {data: session} = useSession()
    const searchParams = useSearchParams()
    const router = useRouter()
    useEffect(() => {
        getData()

    }, [])
useEffect(() => {
  if(searchParams.get("paymentdone")){

    toast('Payment done. Thanks!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    router.push(`/${username}`)
}

}, [])

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid,
            // process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GetMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }
    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbPayments = await fetchPayment(username)
        setPayments(dbPayments)
        // console.log(u, dbPayments)
    }
    return (
        <>
        <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover relative'>
                <img src={currentUser.coverpic} alt="Cover Picture" />
                <div className='absolute -bottom-10 right-[42%] md:right-[46%] rounded-full bg-[#6e94c0] w-16 md:w-28 h-16 md:h-28 overflow-hidden shadow-lg'>
                    <img
                        className='w-full h-full object-cover rounded-full'
                        src={currentUser.profilepic}
                        alt="Profile Picture"
                    />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center mt-12 gap-2 mb-20">
                <div className="font-bold text-3xl">
                    @{username}
                </div>
                <div className='text-slate-400 px-6 text-center'>
                    Let&apos;s support {username} to keep the chai flowing!
                </div>
                <div className='text-slate-400'>
                    {payments.length} payment | ₹{payments.reduce((acc, pay) => acc + pay.amount, 0)} raised
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11 mb-16 flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-10">
                        <h2 className=" text-2xl font-bold my-5">Top 10 supporters</h2>
                        <ul className='mx-5'>
                            {payments.length === 0 && <div className=' text-slate-400'>No payments yet</div>}
                            {payments.map((pay,i)=>{
                            return (<li key={i} className='my-5 flex items-center gap-2'>
                            <img width={40} src="avatar.gif" alt="" />
                            <span>
                                {pay.name} donated <span className='font-bold'>₹{(pay.amount)}</span> with a message "{pay.message || "No message"}"
                            </span>
                        </li>)}
                            )}
                            
                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg p-14">
                        <h2 className="text-2xl font-bold mb-8">Make a payment</h2>
                        <div className="flex flex-col gap-6">
                            {/* Name input */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                name='name'
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                                onChange={handleChange}
                                value={paymentform.name}
                            />
                            {/* Message textarea */}
                            <textarea
                                placeholder="Say something nice... (optional)"
                                name='message'
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors resize-none h-24" onChange={handleChange}
                                value={paymentform.message}
                            ></textarea>
                            {/* Preset amounts */}
                            <div className="grid grid-cols-3 gap-3">
                                <button className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg border border-gray-700 transition-colors" onClick={() => pay(500)} disabled={paymentform.name?.length<=3}>
                                    ₹5
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg border border-gray-700 transition-colors" onClick={() => pay(1000)} disabled={paymentform.name?.length<=3}>
                                    ₹10
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg border border-gray-700 transition-colors" onClick={() => pay(2000)} disabled={paymentform.name?.length<=3}>
                                    ₹20
                                </button>
                            </div>

                            {/* OR divider */}
                            <div className="flex items-center gap-4">
                                <div className="flex-grow h-px bg-gray-700"></div>
                                <span className="text-gray-400 text-sm">OR</span>
                                <div className="flex-grow h-px bg-gray-700"></div>
                            </div>

                            {/* Custom amount input and pay button */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
                                    <input
                                        type="number"
                                        name='amount'
                                        placeholder="Other"
                                        className="w-[120px] pl-7 pr-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                                        min="1"
                                        onChange={handleChange}
                                        value={paymentform.amount}
                                    />
                                </div>
                                <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} className="flex-grow bg-blue-600 hover:bg-blue-700  text-white font-bold py-2 md:px-6 rounded-lg transition-colors disabled:bg-blue-400" disabled={paymentform.name?.length<=3 || !paymentform.amount || paymentform.amount <= 0}>
                                    Pay now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
