import { makeStyles, createStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => createStyles({
    row: {
        color:'#fff',
        '& .row__title': {
            fontWeight: 600,
            paddingLeft: theme.spacing(2.5)
        },
        '& .row__posters': {
            display: 'flex',
            padding: theme.spacing(2.5),
            overflowY: 'hidden',
            overflowX: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
        },
        '& .row__poster': {
            maxHeight: theme.spacing(12.5),
            objectFit: 'contain',
            marginRight: theme.spacing(1),
            width: '100%',
            transition: 'transform 450ms',
            '&:hover': {
                transform: 'scale(1.08)',
                opacity: 1
            }
        },
        '& .row__posterLarge': {
            maxHeight: theme.spacing(31),
        },
    }
}))