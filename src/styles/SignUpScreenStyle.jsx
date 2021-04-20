import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    signUpScreen: {
        maxWidth: theme.spacing(38),
        padding: theme.spacing(8.5),
        margin: '0 auto',
        textAlign: 'left',
        background: 'rgba(0, 0, 0, 0.85)',
        color: '#fff',
        '& .signUpScreen__title': {
            marginBottom: theme.spacing(3),
            fontWeight: 600
        },
        '& .signUpScreen__input': {
            margin: 0,
            '&:last-of-type': {
                margin: theme.spacing(2, 0 , 4, 0)
            },
            width: '100%',
            '& .MuiOutlinedInput-notchedOutline': {
                border: 0
            }
        },
        '& .signUpScreen__overline': {
            color: 'gray',
            fontWeight: 600,
            '& span': {
                marginLeft: theme.spacing(0.5),
                color: '#fff',
                '&:hover': {
                    cursor: 'pointer',
                    textDecoration: 'underline'
                }
            }
        }
    }
}))