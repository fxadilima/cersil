import { useState } from 'preact/hooks';
import { type ComponentChildren, type VNode } from 'preact';

interface CollapseProps {
    children: VNode<{ id: string, caption: string, image: string }>[];
}

export function Collapse({ children }: CollapseProps): ComponentChildren {
    // state 0 adalah index[0]
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div class="container pt-2">
            {/* Pembungkus Flexbox agar btn-group berada tepat di tengah halaman */}
            <div class="d-flex justify-content-center mb-3">
                <div class="btn-group" role="group">
                    {children.map((child, index) => {
                        const characterName = child.props.caption;
                        const isActive = index === activeTab;
                        return (
                            <button 
                                class={`btn btn-${isActive ? "primary" : "secondary"}`} 
                                type="button" 
                                onClick={() => {
                                    setActiveTab(index);
                                }}
                            >
                                {characterName}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Bagian Konten Cerita */}
            {children.map((child, index) => {
                const personName = child.props.caption;
                const active = index === activeTab;
                const imagePath = child.props.image;
                
                // Gunakan inline style CSS untuk clear float agar teks paragraf di bawahnya tidak terganggu
                return (
                    <div 
                        id={child.props.id} 
                        class={`p-3 collapse ${active ? "show" : ""}`}
                        style={active ? "" : "display: none;"} // Memastikan yang tidak aktif benar-hidden
                    >
                        <div style="overflow: hidden; clear: both;">
                            <img 
                                src={imagePath} 
                                alt={`${personName} Image`} 
                                class="rounded"
                                style="max-height:120px; float:left; margin: 0 15px 10px 0;" 
                            />
                            {/* Menggunakan {child} agar konten yang keluar sesuai dengan tab yang di-loop */}
                            {child} 
                        </div>
                    </div>
                );
            })}
        </div>
    );
}







/**
 * Sebelumnya
import { useState } from 'preact/hooks';
import { type ComponentChildren, type VNode } from 'preact';

interface CollapseProps {
    children: VNode<{ id: string, caption: string, image: string }>[];
}

export function Collapse({children}: CollapseProps): ComponentChildren {
    // state 0 adalah index[0]
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div class="container pt-2">
            <div class="btn-group">
                {children.map((child, index) => {
                    const characterName = child.props.caption;
                    const divId = child.props.id;
                    const isActive =  index === activeTab;
                    return (
                        <button class={`btn btn-${isActive ? "primary" : "secondary"}`} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={divId}
                            onClick={() => {
                                setActiveTab(index)
                            }}>
                            {characterName}
                        </button>
                );
                })}
            </div>
            {children.map((child, index) => {
                const personName = child.props.caption;
                const active = index === activeTab;
                const imagePath = child.props.image;
                return (
                    <div id={child.props.id} class={`container p-3 collapse ${active ? "show": ""}`}>
                        <img src={imagePath} alt={`${personName} Image`} style="max-height:120px;float:left;margin:10px" />
                        {children[activeTab]}
                    </div>
                );
            })}
        </div>
    );
}

*/
