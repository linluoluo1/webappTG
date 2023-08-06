
const tgWebApp = window.Telegram.WebApp;


export function useTelegram() {
    const onCLose = () => {
        tgWebApp.close()
    }

    const onToggleButton = () => {
        if (tgWebApp.MainButton.isVisible) {
            tgWebApp.MainButton.hide()
        } else {
            tgWebApp.MainButton.show()
        }
    }
    return {
        onCLose,
        onToggleButton,
        tgWebApp,
        user: tgWebApp.initDataUnsafe?.user,
    }
}