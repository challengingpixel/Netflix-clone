import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    banner: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: '448px',
        color: 'white',
        objectFit: 'contain',
        borderRadius: 0,
        '& .banner--fadeBottom': {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '12.4rem',
            backgroundImage: 'linear-gradient( 180deg, transparent, rgba(37, 37, 37, 0.61), #111)'
        }
    },
    bannerContent: {
        display: 'flex',
        width: '100%',
        padding: theme.spacing(1.5),
        flexDirection: 'column',
        margin: '0 auto',
        textAlign: 'left',
        '& .banner__buttons': {
            margin: theme.spacing(2, 0),
            '& .banner__button':{
                color: '#fff',
                outline: 'none',
                border: 'none',
                fontWeight: '700',
                borderRadius: '0.5vw',
                padding: '0.5rem 2rem',
                backgroundColor: 'rgba(51, 51, 51, 0.5)',
                '&:first-child': {
                    marginRight: theme.spacing(2),
                },
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    transition: 'all 0.2s'
                }
            }
        },
        '& .banner__description': {
            maxWidth: theme.spacing(45)
        }
    }
}))