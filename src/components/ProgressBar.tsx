import {FC} from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: FC<ProgressBarProps> = ({current, total}) => {
    const percentage = (current / total) * 100;

    return (
        <div
            style={{
                width: '70px',
                height: '20px',
                border: '1px solid #ccc',
                borderRadius: '25px',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div
                style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: '#9fc0fd',
                    transition: 'width 0.3s ease-in-out',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#000',
                }}
            >
                {`${current}/${total}`}
            </div>
        </div>
    );
};

export default ProgressBar;