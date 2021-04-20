import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    profileScreen: {
        height: '100vh',
        color: '#fff',
        '& .profileScreen__title': {
            textAlign: 'left',
            marginBottom: theme.spacing(2.5),
            borderBottom: `1px solid ${theme.palette.secondary.gray}`
        }
    },
    profileScreenBody: {
        width: '50%',
        maxWidth: '800px',
        paddingTop: '15%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        '& .profileScreen__info': {
            display: 'flex',
            '& .profileScreen__details': {
                flex: 1,
                color: '#fff',
                marginLeft: theme.spacing(3),
                '& .profileScreen__user': {
                    padding: theme.spacing(0.5),
                    backgroundColor: theme.palette.secondary.gray
                },
                '& .profileScreen__plans': {
                    marginTop: theme.spacing(2),
                    '& .profileScreen__plans__title': {
                        textAlign: 'left',
                        paddingBottom: theme.spacing(1.5),
                        borderBottom: `1px solid ${theme.palette.secondary.gray}`
                    },
                    '& .profileScreen__signOut': {
                        marginTop: theme.spacing(1.5)
                    }
                }
            }
        }
    }
}))