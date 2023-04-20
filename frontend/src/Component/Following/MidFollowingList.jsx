import { Image, Text,Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function MidFollowingList(props) {
    return (
        <Box display={'flex'} flexDirection={"column"} justifyContent={'center'} bg={'rgb(241 242 242)'}>
            <Image m={'auto'} w={'150px'} src='https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.all_caught_up_feed_lightmode.png-26-1b95f406729630f5.png'/>
            <Text m={'auto'} fontSize={'40px'}>You're all caught up</Text>
            <Text m={'auto'}>Follow more Spaces to discover new stories in your feed. You can also visit <Link to={'/'}>Home.</Link></Text>
        </Box>
    );
}

export default MidFollowingList;