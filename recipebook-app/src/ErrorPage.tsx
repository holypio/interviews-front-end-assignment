import { useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error, "RouteError")

    return (
        <p>
            Error loading the page
        </p>
    )

}