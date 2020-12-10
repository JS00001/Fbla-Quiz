import './QuizScore.css';
import React from 'react';
import Print from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

export default class QuizScore extends React.Component {
    render() {

        const quizId = this.props.quizId;
        const percent = this.props.percent;
        const grade_percent = `${percent * 100}`;
        const grade_fraction = `${percent * 5}/5`;

        return (
            <>
                <div className="quiz-score">
                    <Grid container direction="row" alignItems="center">
                        Quiz Attempt #{quizId}
                        <IconButton className="icon"><Print /></IconButton>
                        <div className="score-circle">
                            <p className="score-text">{grade_percent}<span className="percent">%</span></p>
                        </div>
                        <div className="score-circle">
                            <p className="score-text">{grade_fraction}</p>
                        </div>
                    </Grid>
                </div>
            </>
        )
    }
}