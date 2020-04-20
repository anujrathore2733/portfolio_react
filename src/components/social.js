import React from "react";



const Social = () => {




    return (
        <div className="social_gallery">
            <div className="mt-5 btn-div">
                <button className="btn btn-sm glry-btn mx-2" type="button" data-toggle="collapse" data-target="#collapsegallary" aria-expanded="false" aria-controls="collapseExample"><strong>Facebook Gallery</strong></button>
                <button className="btn btn-sm glry-btn mx-2" type="button" disabled ><strong>Instagram Gallery</strong></button>
            </div>
            <div style={{ width: '70%', height: '100%' }} className="mt-3">

                <div class="collapse h-100" id="collapsegallary">
                    <div class="display_gallary">
                        <div className="fbpost">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1299286486786261%26set%3Da.925554660826114%26type%3D3%26theater&show_text=true&width=552&appId=246383226069600&height=202" width="100%" height="100%" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="fbpost">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1299309303450646%26set%3Da.925554660826114%26type%3D3%26theater&show_text=false&width=552&appId=301310503798969&height=414" width="100%" height="100%" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="fbpost">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1299319830116260%26set%3Da.925554660826114%26type%3D3%26theater&show_text=false&width=552&appId=301310503798969&height=414" width="100%" height="100%" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="fbpost">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D925561257492121%26set%3Da.925554660826114%26type%3D3%26theater&show_text=false&width=552&appId=301310503798969&height=202" width="100%" height="100%" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="fbpost">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1298925900155653%26set%3Da.925554660826114%26type%3D3%26theater&show_text=false&width=552&appId=301310503798969&height=498" width="100%" height="100%" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="fbpost">
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D916543081729855%26set%3Dt.100001147653370%26type%3D3%26theater&show_text=true&width=552&appId=301310503798969&height=590" width="100%" height="100%"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Social