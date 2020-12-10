import './Dashboard.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Statbar from '../../Statbar/Statbar';
import Quizzes from '../../../Data/quizzes.json';
import QuizScore from '../../QuizScore/QuizScore.js';

export default class Dashboard extends React.Component {
    state = {}

    render() {

        const setActive = this.props.setActive;

        return (
            <>
                <Sidebar active="Dashboard" setActive={setActive} />
                <div className="dashboard row">
                    <div className="column-60">
                        <h3>Quiz Logs</h3>
                        {
                            Quizzes.map(item => {
                                return (
                                    <QuizScore percent={item.correct / 5} quizId={item.quiz_number} />
                                )
                            })
                        }
                    </div>

                    <div className="column-40">
                        <Statbar title="Quizzes Taken" description="This number is the total number of quizzes you have taken." icon="5" />
                        <Statbar title="Quiz Average" description="This is the average percent grade of all of your quizzes combined." icon="20%" />
                        <Statbar title="Skill Level" description="This is your letter grade rating of all of your quizzes combined." icon="A+" />
                    </div>
                </div>
            </>
        )
    }
}