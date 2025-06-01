import { ClipLoader } from "react-spinners";

export default function Loading() {
    return (
        <div style={{ 
            height:"90vh",
            display: 'flex', 
            alignItems:"center",
            justifyContent: 'center', 
            marginTop: '2rem' }}
        >
            <ClipLoader 
                color="#36d7b7" 
                size={100} 
            />
        </div>
    );
};