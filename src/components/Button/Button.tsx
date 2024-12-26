import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled} from '@mui/system';

type TButtonProps = {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled(BaseButton)<TButtonProps>(({ theme, ...props }) => {
  const FONT_SIZE_MAP = {
    small: '12px',
    medium: '14px',
    large: '16px',
  } as const;

  const PADDING_SIZE_MAP = {
    small: `${theme.spacing(2)} ${theme.spacing(4)}`,
    medium: `${theme.spacing(3)} ${theme.spacing(5)}`,
    large: `${theme.spacing(4)} ${theme.spacing(6)}`,
  } as const;

  return {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    color: theme.palette.primary.contrastText,
    padding: PADDING_SIZE_MAP[props.size || 'medium'],
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: 2 * theme.shape.borderRadius,
    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.3)',
    transition: 'all 0.2s ease-in-out',
    fontSize: FONT_SIZE_MAP[props.size || 'medium'],
    
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
    },

    [`&.${buttonClasses.active}`]: {
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.4)',
    },
  }
});

export default function Button({ children, onClick, size = 'medium' }: TButtonProps) {
  return <StyledButton size={size} onClick={onClick}>{children}</StyledButton>;
}
