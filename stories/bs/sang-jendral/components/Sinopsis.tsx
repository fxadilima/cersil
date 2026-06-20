import { type ComponentChildren, type VNode } from 'preact';

interface CardProps {
    image: string;
    caption: string;
    children?: ComponentChildren;
}

interface ImageCardsProps {
    children: ComponentChildren;
}

export function Card({ image, caption, children }: CardProps) {
    return (
        <div className="card m-2">
            <img src={image} alt={caption} />
            {children && (
                <div className="card-body" style="max-width:300px">
                    {children}
                </div>
            )}
            <div className="card-footer">
                <p className="text-center"><strong>{caption}</strong></p>
            </div>
        </div>
    );
}

export function ImageCards({children}: ImageCardsProps) {
    return (
        <div className="d-flex p-2 bg-dark justify-content-center flex-wrap">
            {children}
        </div>
    );
}
