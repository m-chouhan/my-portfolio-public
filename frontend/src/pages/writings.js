import React, { Component } from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, Grid, Link } from '@mui/material';
import { fetchBlogPosts } from '../services/api';

const FeaturedPost = ({ post }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: '100%' }}>
                <CardActionArea href={post.link} target="_blank" style={{ height: '100%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={post.image}
                        alt={post.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ flexShrink: 0 }}>
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ flexShrink: 0 }}>
                            {post.date}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                flexGrow: 1,
                                maxHeight: '60px'
                            }}
                        >
                            {post.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

class Writings extends Component {
    state = {
        posts: [],
        error: null,
    };

    async componentDidMount() {
        try {
            const posts = await fetchBlogPosts();
            this.setState({ posts });
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            this.setState({ error: 'Failed to fetch blog posts. Please try again later.' });
        }
    }

    render() {
        const { posts, error } = this.state;
        return (
            <>
                <Typography style={{ paddingBottom: '24px' }} variant="h6" paragraph>
                    I also write about software development in my free time. You can check out my blogs on{' '}
                    <Link href="https://medium.com/@mchouhanofficial" target="_blank">
                        Medium
                    </Link>{' '}
                    and{' '}
                    <Link href="https://www.enjoyalgorithms.com" target="_blank">
                        EnjoyAlgorithms
                    </Link>.
                </Typography>
                {error && (
                    <Typography color="error" paragraph>
                        {error}
                    </Typography>
                )}
                <Grid container spacing={4}>
                    {posts.map((post, index) => (
                        <FeaturedPost key={index} post={post} />
                    ))}
                </Grid>
            </>
        );
    }
}

export default Writings;
