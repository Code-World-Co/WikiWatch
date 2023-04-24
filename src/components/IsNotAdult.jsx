import { CiUnread } from 'react-icons/ci'

export const IsNotAdult = ({ children, IsAdult, isAdultMovie }) => {

    return (
        <div style={{ position: "relative", padding: "30px 0" }}>
            {
                IsAdult === 'false' && isAdultMovie ?
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backdropFilter: 'blur(10px)',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)'
                    }}>
                        <p style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '3rem',
                            fontWeight: '600',
                            color: 'white'
                        }}><CiUnread className='alert-icon' /> Content +18 </p>
                    </div>
                    :
                    ''
            }
            {children}
        </div>
    )
}