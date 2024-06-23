import Navbar from "./Navbar";

export default function Header() {
    return (
        <>
            <div className="bg-white sticky-top">
                <div style={{ width: '100%', height: '1rem' }}>
                    &nbsp;
                </div>
                <Navbar />
                <h1 className="my-5 text-center">Snap a recipe!</h1>
                <hr className="shadow text-center" style={{ width: '70%', margin: 'auto' }} />
            </div>
        </>
    )
}
