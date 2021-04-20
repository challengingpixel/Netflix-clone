import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    loginScreen: {
        position: 'relative',
        height: '100%',
        background: 'url("https://i.ibb.co/1G5y9Bt/IN-en-20200627-popsignuptwoweeks-perspective-alpha-website-medium.jpg")center no-repeat',
        backgroundSize: 'cover',
        '& .loginScreen__background': {
            '& .loginScreen__gradient': {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                zIndex: 1,
                height: '100vh',
                color: '#fff',
                background: 'rgba(0, 0, 0, 0.4)',
                backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)',
                '& .loginScreen__body': {
                    padding: theme.spacing(0, 2),
                    margin: '0 auto'
                }
            },
            '& h5': {
                padding: theme.spacing(2.5, 3.5)
            }
        }
    },
    loginScreenInput: {
        paddingTop: theme.spacing(2.5),
        '& .loginScreen__form': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& .MuiFormControl-root': {
            margin: 0,
            color: '#fff',
            '& .MuiInputBase-root': {
                backgroundColor: '#fff',
                borderRadius: 0,
                '&:focus': {
                    outline: 0
                }
            }
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
}))