/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R4ytiDFCBew
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Stepper() {
    return (
      <div className="flex items-center justify-between w-full px-4 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">1</div>
          <div className="text-sm font-semibold">Account Setup</div>
        </div>
        <div className="w-24 h-1 bg-black" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">2</div>
          <div className="text-sm font-semibold">Personal Details</div>
        </div>
        <div className="w-24 h-1 bg-black" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">3</div>
          <div className="text-sm font-semibold">Preferences</div>
        </div>
        <div className="w-24 h-1 bg-gray-300" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold">
            4
          </div>
          <div className="text-sm font-semibold text-gray-500">Confirmation</div>
        </div>
      </div>
    )
  }