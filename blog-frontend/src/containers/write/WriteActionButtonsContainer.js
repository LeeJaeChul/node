import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError
    }));

    //포스트 등록 (리덕스 스토어에 저장된 값을 사용하여 작성 )

    const onPublish = () => {
        dispatch(
            writePost({
                title,
                body,
                tags
            }),
        );
    };

    // 취소
    const onCancel = () => {
        history.goBack();
    };

    // 성공 또는 실패 시 할 작업
    useEffect(() => {
        if (post) {
            const { _id, user } = post;
            history.push(`/@${user.username}/${_id}`);
        }
        if (postError){
            console.log(postError);
        }
    }, [history, post, postError]);

    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
