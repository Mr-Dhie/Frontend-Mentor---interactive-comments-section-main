export default function ScoreButton({plus_btn,minus_btn,score,}) {
    return (
        <>
            <button>
                <img src={plus_btn} alt="plus button" style={{ color: "blue" }} />
            </button>

            <span>{score}</span>

            <button>
                <img src={minus_btn} alt="minus button" />
            </button>

        </>
    )
}