const postId = document.querySelector('input[name="post-id"]').value;
console.log(postId);

const editForm = async (event) => {
    event.preventDefault;

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;

    console.log(postTitle);
    console.log(postContent);

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postTitle,
            postContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Update Failed!');
    }
    document.location.replace('/dashboard');
};

const deleteClick = async () => {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
}

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editForm);

document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClick);