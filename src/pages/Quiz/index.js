import { useParams } from "react-router-dom";
import { PDFDownloadLink, Document, View, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';
import useGetInfo from "../../hooks/useGetInfo";
import Button from "../../components/UI/Button"
import "./index.css";
import { useState } from "react";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        padding: 3,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white"

    },
    top: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20"
    },
    bottom: {
        textAlign: "left"
    },
    Imagei: {
        width: "20"
    },
    Image: {
        width: "100"
    },

    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const MyDoc = () => (
    <Document>
        <Page style={styles.page}
        >
            <View style={styles.top}
            >
                <View>
                    <Text fixed>
                        Certificate of Completion
                        <Image
                            style={styles.Imagei}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxfzCEiXCG0JUtvQWn0t5vwb-FAxJkOizoQ&usqp=CAU"
                        />
                    </Text>


                </View>
                <Text >
                    This is to certify that ashwin  has
                    Successfully completed his course in typescript with us

                </Text>
                <View
                    style={styles.bottom}
                >
                    <Image
                        style={styles.Image}

                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZWqSGeHjrHTVGKk56XnOzqtY2GJkTbc9QQ&usqp=CAU"
                    />

                    <Text >
                        Signature of CEO

                    </Text>
                </View>




            </View>


        </Page>
    </Document>
);


function Quiz() {

    const { id } = useParams()

    const [data, loading, error] = useGetInfo(`http://localhost:8000/api/v1/content/${id}`);
    console.log("quiz", data?.data?.quizes?.quiz)


    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [print, setprint] = useState(false);

    const handleOptionChange = (questionIndex, selectedOption) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: selectedOption,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newScore = 0;
        data?.data?.quizes?.quiz.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                newScore++;
            }
        });
        setScore(newScore);
        setprint(true)
    };

    return (
        <div className="quiz-container">
            <h2>Quiz</h2>
            <form onSubmit={handleSubmit}>
                {data?.data?.quizes?.quiz.map((question, index) => (
                    <div key={index}>
                        <p>{index + 1}{")"}{question.question}</p>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    id={`q${index}-option${optionIndex}`}
                                    name={`q${index}`}
                                    value={option}
                                    checked={userAnswers[index] === option}
                                    onChange={() => handleOptionChange(index, option)}
                                />
                                <label htmlFor={`q${index}-option${optionIndex}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <Button type="submit">Submit</Button>

            </form>
            {score !== null && <p>Your Score: {score}</p>}
            {print && <div>
                <Button>
                    <PDFDownloadLink document={<MyDoc  />} fileName="Certificate.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading...' : 'Print Certificate!'
                        }
                    </PDFDownloadLink>
                </Button>

            </div>
            }

        </div>
    );




}

export default Quiz;