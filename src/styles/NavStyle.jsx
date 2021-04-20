import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    root: {
        /* Animations */
        transitionTimingFunction: "ease-in",
        transition: "all 0.2s",
        '& .root__content': {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            '& .root__logo': {
                fontWeight: 700,
                letterSpacing: 2
            },
            '& .loginScreen__button': {
                fontSize: '1rem',
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                color: '#fff',
                backgroundColor: '#e50914',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
                textTransform: 'initial'
            }
        }
    }
}))