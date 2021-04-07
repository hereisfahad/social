import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

function index({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex flex-col flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default index
