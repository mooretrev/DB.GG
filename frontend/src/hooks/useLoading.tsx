import { ReactElement, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import ConditionalMessage from "../components/ConditionalMessage"

export interface UseLoadingHook {
    loading: boolean;
    success: boolean;
    error: boolean;

    setLoading: (value: boolean) => void;
    setError: (value: boolean) => void;
    setSuccess: (value: boolean) => void;
    setContent: (content: ReactElement) => void;

    resetState: () => void;
    render: () => ReactElement;
}
export default function useLoading(): UseLoadingHook {
    let content: ReactElement = <div />;

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const setContent = (value: ReactElement) => {
        content = value
    }

    const resetState = () => {
        setLoading(false)
        setSuccess(false)
        setError(false)
    }

    const render = (): ReactElement => {
        const condition = !loading && !error && !success

        return (
            <>
                {condition && content}
                {loading && <Grid container justifyContent="center"><CircularProgress /></Grid>}
                <ConditionalMessage conditional={error} message="An error has occured" onReset={resetState} />
                <ConditionalMessage conditional={success} message="Operation was successful" onReset={resetState} />
            </>
        )
    }

    return {
        loading,
        success,
        error,
        setLoading,
        setError,
        setSuccess,
        setContent,
        resetState,
        render
    }
}