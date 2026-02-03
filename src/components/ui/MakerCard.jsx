const MakerCard = () => {
    return (
        <div
            className="rounded-xl bg-white p-5 shadow-sm border border-background-light">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-background-light bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ48FVDWnuQCzCLNSn7tL-5VsrzIN31-o642PXy9tznXxc0L73SOvBKcHQWaDqIA5vZCsBUj2GgmWplfYV1KM0MeQYs34c-PK2AqW3wlDsNnMSPInVSXTaz8MJHcdU2Izqh5WlkAVb5aAkikPQieJzw_xtQebWl-Fn_W52yPrQGbGP3SxK8oiu9qBLyyYFX1iuZ4ncuWyHUIWyS1n1mtwQuMksbxwDIQQSNtQoiHrtKTlKSiAlTh90jRVP4x3OZSX8X7sQFeBJZUs')" }}>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary truncate">Urban Threads</h3>
                    <p className="text-xs text-secondary">98% Positive Feedback</p>
                </div>
                <button
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200">Visit</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_HAQaRy2jvqIvfrdRsu3fBVghnzTOG3PH94KjoBNdiukDMIDnCeaxu__0TuozxEL_hFFxHfXdtHyWyGoSPK6UPKthSW7fmUwoFTgTt-ttdefxr5PrRxo1ZCe8vLdoZAmKbU5Qd6qo2n1qb1Xwi2CgX5nKjnD1qs9HW0TjafkgBtpfNJUlFSU4MGtEYV0PIMSwYEzpzubkhirhTnVIASbgBrMD-C9D_SNjqN0sQm2lOceGwt_e1hxJaQ8OaPX3gbTwQawI9ucDOaw')" }}>
                </div>
                <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfSvvZcVaZOTVnmCMOpeDNWdhgynsoxeWfDbDUZTeI7CI4oVHCMozHQS8fzolfYnr9RIlbBodaO7Ae_su_CmemleuwV514n7g3CIuLOK1pNslMOIEl8BMryL6qHJWPHKcP5d002hFK88t2wM36VAqUTjtTL2amVO6tb0j3lEAlOypXtXN0Kzpn1KSv6XINE6T97V1hWn_Ld74yvt_CoY6iCvJn5JyOxgvaORBk09hsD6qGt3_2Y2Oqim5ifZx4HNi3-LAnzvyajUY')" }}>
                </div>
                <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkvVCTze-x4enJZHoQmbjSgrn0fQoEx0b2nEnwPGynE_iXu0RVggqWaKibiAVzPi78lDD_zlGRsmTQ665RzBOC_0i30d2vJPenVoJO-R6r9siigruCAmdgovr7-_8ZRV-SIu_HzozKFc8Pbz3kyF12JsvHgMmtnm6_-D9vHlp2M2-m3E5d42BWfqQpXVhpLGpNx_MHuMYTto6u9hiPsRu6etDMiipiLuIQcJTe0TLKjChalkoS_QpISq0gySCmpKvtfbq71043Mjk')" }}>
                </div>
            </div>
        </div>
    )
}

export default MakerCard;