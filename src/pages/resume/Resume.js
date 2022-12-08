import classes from './Resume.module.css';

const Resume = () => {
    return (
        // <Fragment>
        //     <AddJob />
        //     <JobWrapper />
        // </Fragment>
        <div className={classes['resume-wrapper']}>
            <h2>Jae Lee</h2>
            <h7>ljw4182@gmail.com | 732-357-7650 </h7>
            <h3 className={classes['detail-seperator']}>EDUCATION</h3>
            <hr className={classes['hr-line']} />
            <div>George Mason University, Fairfax VA</div>
            <div>Bachelor of Information Technology</div>
            <div>January 2015 – December 2019</div>

            <h3 className={classes['detail-seperator']}>Work Experience</h3>
            <hr className={classes['hr-line']} />

        </div>
    )
}

export default Resume;