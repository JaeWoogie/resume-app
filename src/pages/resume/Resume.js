import { Fragment } from 'react';
import AddJob from './AddJob';
import JobWrapper from '../../components/job-wrapper/JobWrapper'
import classes from './Resume.module.css';

const Resume = () => {
    return (
        <Fragment>
            <AddJob />
            <JobWrapper />
        </Fragment>
    )
}

export default Resume;