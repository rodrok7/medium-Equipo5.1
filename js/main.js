var post ={
    tittle : "Half the Cost of School lunch goes to a 60 Cent Brown",
    content: "contenido de prueba",
    date: "June 20",
    tipe: "new",
    autor: "Ricardo Picazo", 
    timereading:"6 min",
    url:"https://cdn-images-1.medium.com/fit/c/152/156/1*7c0StzgxruNIIdgygmhP1A.jpeg"
    }
    
    var post2 ={
        tittle : "Half the Cost of School lunch goes to a 60 Cent Brown",
        content: "contenido de prueba",
        date: "June 20",
        tipe: "popular",
        autor: "Ricardo Picazo", 
        timereading:"6 min",
        url:"https://cdn-images-1.medium.com/fit/c/152/156/1*7c0StzgxruNIIdgygmhP1A.jpeg"
        }
    
    var post3 ={
            tittle : "Half the Cost of School lunch goes to a 60 Cent Brown",
            content: "contenido de prueba",
            date: "June 20",
            tipe: "comun",
            autor: "Ricardo Picazo", 
            timereading:"6 min",
            url:"https://cdn-images-1.medium.com/fit/c/152/156/1*7c0StzgxruNIIdgygmhP1A.jpeg"
            }
    
    const printPosts = (postObject) => {
    
     const { tittle, content, date,tipe,autor,timereading,url } = postObject
     console.log(tittle)
     console.log(content)
     console.log(date)
     console.log(tipe)
     console.log(autor)
     console.log(timereading)
     console.log(url)
        switch( tipe ) {
            case "popular":
                $("#popular-wrapper").append(`
                <div class="d-inline-flex mt-5">
                <h3 class="mr-3 text-black-50">01</h3>
                <h5 class="text-dark hoover-h">${tittle}
                </h5>
                </div>
                <span class="hoover-h ml-5">${autor}</span>
                <div class="row ml-5">
                <div class="m-0">
                    <p class="card-text"><small class="text-muted">${date} • ${timereading} read</small> <span
                            class="middotDivider text-muted">★</span></p>
                </div>
            </div>
                `) 
                break;
    
            case "new":
                $("#new-wrapper").append(`
                <div class="card mb-3 border-white">
                <div class="row no-gutters flex-md-row-reverse p-0" id="blog-reverse">
                    <div class="col-8">
                        <div class="card-body py-0">
                            <h5 class="card-title">${tittle}</h5>
                            <p class="card-text text-muted">${content}</p>
                            <p class="card-text m-0">${autor}</p>
                            <div class="row">
                                <div class="col-10">
                                    <p class="card-text"><small class="text-muted">${date} · ${timereading} read ★</small></p>
                                </div>
                                <div class="col-2 d-flex justify-content-end px-0">
                                    <div class="d-md-none">
                                        <a class="text-dark mx-1" href="#"><i
                                                class="far fa-bookmark"></i></a>
                                    </div>
                                    <a class="text-dark mx-1" href="#"><i
                                            class="fas fa-ellipsis-h text-muted"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="h-100 w-100">
                            <img src="https://cdn-images-1.medium.com/focal/200/200/43/29/1*BPavVa0FWuIXQ0moqBepsA.jpeg"
                                class="card-img" alt="...">
                        </div>
                    </div>
                </div>
            </div>
            `) 
            break;
    
            case "comun":
                $("#comun-wrapper").append(`
                <div class="col-8 d-flex flex-column pl-5 pb-5">
                <h6 class="text-muted font-weight-light">BASED ON YOUR READING HISTORY</h6>
                <h4 class="hoover-h">${tittle}</h4>
                <p class="text-muted font-weight-light">${content}</p>
                <div class="d-flex justify-content-start">
                    <p class="mx-2">in</p><span class="hoover-h">${autor}</span>
                </div>
                <div class="row">
                    <div class="col-6 d-flex justify-content-around">
                        <span class="text-muted">${date}</span>
                        <span class="text-muted">•</span>
                        <span class="text-muted">${timereading} read</span>
                        <span class="text-muted">★</span>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <i class="far fa-bookmark mx-1 hoover-h"></i>
                        <i class="fas fa-ellipsis-h text-muted mx-1 hoover-h"></i>
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex flex-column mt-5 pr-0">
                <img src="${url}" class="card-img" alt="...">
            </div>
                `)
                break;
            default:
                console.log("no puedo realizar la operación seleccionada")
        } 
    
       
    }

    const preview = () => {
        $("#previewImage") = $("#validationTooltip05").val
    }
    
    const loadContent = (contentUrl,callback) =>{
        $("#main-container").load(contentUrl,callback)
    }
    const handleSubmitClick = () => {
        $("#submit").click(getFormData)
    }
    
    var postObject = {}
    
    const getFormData = () => {
        
        $('input').each(function (index) {
            let objectKey = $(this).data("points-to");
            let value = $(this).val();
            postObject[objectKey] = value;
            
        })
     console.log(postObject)
     savePost(postObject)
    }
    
    $("#submit").click(getFormData)

const savePost = (postObject) => {
$.ajax(
    {url:`https://ajaxclass-1ca34.firebaseio.com/equipo5/post/.json`,
    method:"POST",
    data:JSON.stringify(postObject),success: (response)=> {
        console.log(response);
    }
});

}

const getPostData = () => {
   
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
            for (let post in response) {
                console.log(post)
                printPosts({...response[post]})
                
            }
        }
    };
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/equipo5/post/.json", true);
    xhttp.send();
}
getPostData()

    


    