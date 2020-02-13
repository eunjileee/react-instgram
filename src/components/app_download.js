import React, { Component } from 'react'


class AppDownload extends Component {
    render () {
        return (
            <div className = "thirdArticle">
                <p className = "downloadMsg">앱을 다운로드하세요.</p>
                <div className = "btns">
                <button className = "ios" onClick = {() => window.location.href = 'https://apps.apple.com/app/instagram/id389801252?vt=lo'} />
                <button className = "android" onClick = {() => window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D2020725B-F929-46F8-A675-D47E945CAE16%26utm_content%3Dlo%26utm_medium%3Dbadge'}/>
            </div>
            </div>
        )
    }
}


export default AppDownload;