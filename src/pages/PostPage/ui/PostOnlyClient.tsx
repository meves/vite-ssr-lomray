import OnlyClient from '@lomray/vite-ssr-boost/components/only-client';
import { Fallback } from '@shared/ui';

export const PostOnlyClient = () => {
  console.log('PostOnlyClient render');
  
  return (
    <OnlyClient 
      load={() => import('./Post.tsx')}
      fallback={<Fallback/>}
    >
      {(Post) => <Post/>}
    </OnlyClient>
  )
}
