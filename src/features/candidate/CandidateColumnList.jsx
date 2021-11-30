import CandidateCard from "./CandidateCard";



const CandidateColumnList = ({
    candidates = []
}) => {
    return (
        <div className="p-grid">
            {
                candidates.map(candidate => (
                    <div key={candidates.id} className="p-col-3">
                        <CandidateCard {...candidate} />
                    </div>
                ))
            }
        </div>
    )
}

export default CandidateColumnList;