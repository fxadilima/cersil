import { useState } from 'preact/hooks';
import { type ComponentChildren, type VNode } from 'preact';

interface TabChildProps {
    id: string;      
    caption: string; 
    image: string;   
    children?: ComponentChildren; 
}

interface CollapseProps {
    children: VNode<TabChildProps>[];
}

export function Collapse({ children }: CollapseProps): ComponentChildren {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div class="w3-container w3-center">
                <div class="w3-bar w3-round">
                    {children.map((child, index) => {
                        const { caption } = child.props;
                        const isActive = activeTab === index;

                        return (
                            <button
                                key={index}
                                /* Tombol aktif bisa disesuaikan, di sini memakai w3-blue atau kelas tema lain */
                                class={`w3-bar-item w3-button w3-round w3-margin-right w3-medium ${
                                    isActive ? 'w3-blue' : 'w3-grey'
                                }`}
                                onClick={() => setActiveTab(index)}
                                type="button"
                            >
                                {caption}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div class="w3-card-4 w3-theme-d4 w3-round w3-margin-top w3-margin-bottom" style="max-width: 800px; margin: auto;">
                
                {/* 2. Konten Cerita Paralel */}
                {children.map((child, index) => {
                    const { id, image, children: storyContent } = child.props;
                    const isActive = activeTab === index;

                    return (
                        <div
                            id={id}
                            key={id || index}
                            class={`w3-container w3-padding-16 w3-animate-opacity ${
                                isActive ? 'w3-show' : 'w3-hide'
                            }`}
                        >
                            {/* Gambar float: left dengan batas tinggi 120px */}
                            <img
                                src={image}
                                class="w3-left w3-round w3-margin-right w3-card-2"
                                alt="Ilustrasi Karakter"
                                style="max-height: 120px; object-fit: cover;"
                            />

                            {/* Teks Narasi Cerita */}
                            <div class="w3-serif w3-justify text-light-grey" style="line-height: 1.8; font-size: 1.1em;">
                                {storyContent}
                            </div>
                            
                            {/* Clearfix agar layout w3-theme-d4 tidak berantakan */}
                            <div style="clear: both;"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
