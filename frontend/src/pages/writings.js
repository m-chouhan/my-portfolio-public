import React, { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Container, Link } from '@mui/material';
import { fetchBlogPosts } from '../services/api';

const BlogPostCard = ({ post }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { boxShadow: 6 } }}>
        <CardActionArea href={post.link} target="_blank" sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {post.image && (
                <CardMedia
                    component="img"
                    height="140"
                    image={post.image}
                    alt={post.title}
                />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    {post.date ? new Date(post.date).toLocaleDateString() : ''}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                }}>
                    {post.description || "No description available."}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

const Writings = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchBlogPosts();
                setPosts(data);
            } catch (err) {
                console.error("Failed to fetch blog posts:", err);
                setError("Failed to load blog posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ mb: 3 }}>
                Writings
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
                I also write about software development in my free time. You can check out my blogs on{' '}
                <Link href="https://medium.com/@mchouhanofficial" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold' }}>
                    Medium
                </Link>
                {' '}and{' '}
                <Link href="https://www.enjoyalgorithms.com/" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold' }}>
                    EnjoyAlgorithms
                </Link>.
            </Typography>
            
            {loading && <Typography>Loading articles...</Typography>}
            
            {error && (
                <Typography color="error" sx={{ mb: 4 }}>
                    {error}
                </Typography>
            )}

            {!loading && !error && (
                <Grid container spacing={4}>
                    {posts.map((post, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <BlogPostCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Writings;
