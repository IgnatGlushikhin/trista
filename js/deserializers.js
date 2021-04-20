var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.JointSpring' )
  var i1789 = data
  i1788.spring = i1789[0]
  i1788.damper = i1789[1]
  i1788.targetPosition = i1789[2]
  return i1788
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.JointMotor' )
  var i1791 = data
  i1790.m_TargetVelocity = i1791[0]
  i1790.m_Force = i1791[1]
  i1790.m_FreeSpin = i1791[2]
  return i1790
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.JointLimits' )
  var i1793 = data
  i1792.m_Min = i1793[0]
  i1792.m_Max = i1793[1]
  i1792.m_Bounciness = i1793[2]
  i1792.m_BounceMinVelocity = i1793[3]
  i1792.m_ContactDistance = i1793[4]
  i1792.minBounce = i1793[5]
  i1792.maxBounce = i1793[6]
  return i1792
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointDrive' )
  var i1795 = data
  i1794.m_PositionSpring = i1795[0]
  i1794.m_PositionDamper = i1795[1]
  i1794.m_MaximumForce = i1795[2]
  return i1794
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1797 = data
  i1796.m_Spring = i1797[0]
  i1796.m_Damper = i1797[1]
  return i1796
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1799 = data
  i1798.m_Limit = i1799[0]
  i1798.m_Bounciness = i1799[1]
  i1798.m_ContactDistance = i1799[2]
  return i1798
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1801 = data
  i1800.m_ExtremumSlip = i1801[0]
  i1800.m_ExtremumValue = i1801[1]
  i1800.m_AsymptoteSlip = i1801[2]
  i1800.m_AsymptoteValue = i1801[3]
  i1800.m_Stiffness = i1801[4]
  return i1800
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1803 = data
  i1802.m_LowerAngle = i1803[0]
  i1802.m_UpperAngle = i1803[1]
  return i1802
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1805 = data
  i1804.m_MotorSpeed = i1805[0]
  i1804.m_MaximumMotorTorque = i1805[1]
  return i1804
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1807 = data
  i1806.m_DampingRatio = i1807[0]
  i1806.m_Frequency = i1807[1]
  i1806.m_Angle = i1807[2]
  return i1806
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1809 = data
  i1808.m_LowerTranslation = i1809[0]
  i1808.m_UpperTranslation = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1810 = root || new pc.UnityMaterial()
  var i1811 = data
  i1810.name = i1811[0]
  request.r(i1811[1], i1811[2], 0, i1810, 'shader')
  i1810.renderQueue = i1811[3]
  i1810.enableInstancing = !!i1811[4]
  var i1813 = i1811[5]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1813[i + 0]) );
  }
  i1810.floatParameters = i1812
  var i1815 = i1811[6]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1815[i + 0]) );
  }
  i1810.colorParameters = i1814
  var i1817 = i1811[7]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1817[i + 0]) );
  }
  i1810.vectorParameters = i1816
  var i1819 = i1811[8]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1819[i + 0]) );
  }
  i1810.textureParameters = i1818
  var i1821 = i1811[9]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1821[i + 0]) );
  }
  i1810.materialFlags = i1820
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1825 = data
  i1824.name = i1825[0]
  i1824.value = i1825[1]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.value = new pc.Color(i1829[1], i1829[2], i1829[3], i1829[4])
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1833 = data
  i1832.name = i1833[0]
  i1832.value = new pc.Vec4( i1833[1], i1833[2], i1833[3], i1833[4] )
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1837 = data
  i1836.name = i1837[0]
  request.r(i1837[1], i1837[2], 0, i1836, 'value')
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1841 = data
  i1840.name = i1841[0]
  i1840.enabled = !!i1841[1]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1843 = data
  i1842.position = new pc.Vec3( i1843[0], i1843[1], i1843[2] )
  i1842.scale = new pc.Vec3( i1843[3], i1843[4], i1843[5] )
  i1842.rotation = new pc.Quat(i1843[6], i1843[7], i1843[8], i1843[9])
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1845 = data
  i1844.enabled = !!i1845[0]
  i1844.isTrigger = !!i1845[1]
  request.r(i1845[2], i1845[3], 0, i1844, 'material')
  i1844.center = new pc.Vec3( i1845[4], i1845[5], i1845[6] )
  i1844.radius = i1845[7]
  return i1844
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnselectedColliderDrawer' )
  var i1847 = data
  return i1846
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i1848 = root || request.c( 'WheatPieceDestroyer' )
  var i1849 = data
  return i1848
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i1850 = root || request.c( 'WheatPieceRandomizer' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'partsParent')
  return i1850
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i1852 = root || request.c( 'DisableIfTooFar' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'carUserControl')
  i1852.selfTrackX = i1853[2]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'sharedMesh')
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'additionalVertexStreams')
  i1856.enabled = !!i1857[2]
  request.r(i1857[3], i1857[4], 0, i1856, 'sharedMaterial')
  var i1859 = i1857[5]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 2) {
  request.r(i1859[i + 0], i1859[i + 1], 2, i1858, '')
  }
  i1856.sharedMaterials = i1858
  i1856.receiveShadows = !!i1857[6]
  i1856.shadowCastingMode = i1857[7]
  i1856.sortingLayerID = i1857[8]
  i1856.sortingOrder = i1857[9]
  i1856.lightmapIndex = i1857[10]
  i1856.lightmapSceneIndex = i1857[11]
  i1856.lightmapScaleOffset = new pc.Vec4( i1857[12], i1857[13], i1857[14], i1857[15] )
  i1856.lightProbeUsage = i1857[16]
  i1856.reflectionProbeUsage = i1857[17]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1863 = data
  i1862.enabled = !!i1863[0]
  i1862.isTrigger = !!i1863[1]
  request.r(i1863[2], i1863[3], 0, i1862, 'material')
  request.r(i1863[4], i1863[5], 0, i1862, 'sharedMesh')
  i1862.convex = !!i1863[6]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.tag = i1865[1]
  i1864.enabled = !!i1865[2]
  i1864.isStatic = !!i1865[3]
  i1864.layer = i1865[4]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.halfPrecision = !!i1867[1]
  i1866.vertexCount = i1867[2]
  i1866.aabb = i1867[3]
  var i1869 = i1867[4]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( !!i1869[i + 0] );
  }
  i1866.streams = i1868
  i1866.vertices = i1867[5]
  var i1871 = i1867[6]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1871[i + 0]) );
  }
  i1866.subMeshes = i1870
  var i1873 = i1867[7]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 16) {
    i1872.push( new pc.Mat4().setData(i1873[i + 0], i1873[i + 1], i1873[i + 2], i1873[i + 3],  i1873[i + 4], i1873[i + 5], i1873[i + 6], i1873[i + 7],  i1873[i + 8], i1873[i + 9], i1873[i + 10], i1873[i + 11],  i1873[i + 12], i1873[i + 13], i1873[i + 14], i1873[i + 15]) );
  }
  i1866.bindposes = i1872
  var i1875 = i1867[8]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1875[i + 0]) );
  }
  i1866.blendShapes = i1874
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1881 = data
  i1880.triangles = i1881[0]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1887 = data
  i1886.name = i1887[0]
  var i1889 = i1887[1]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1889[i + 0]) );
  }
  i1886.frames = i1888
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.width = i1891[1]
  i1890.height = i1891[2]
  i1890.mipmapCount = i1891[3]
  i1890.anisoLevel = i1891[4]
  i1890.filterMode = i1891[5]
  i1890.hdr = !!i1891[6]
  i1890.format = i1891[7]
  i1890.wrapMode = i1891[8]
  i1890.alphaIsTransparency = !!i1891[9]
  i1890.alphaSource = i1891[10]
  return i1890
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i1892 = root || request.c( 'DamagingObstacle' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'parts')
  i1892.m_damage = i1893[2]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1895 = data
  i1894.enabled = !!i1895[0]
  request.r(i1895[1], i1895[2], 0, i1894, 'sharedMaterial')
  var i1897 = i1895[3]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1894.sharedMaterials = i1896
  i1894.receiveShadows = !!i1895[4]
  i1894.shadowCastingMode = i1895[5]
  i1894.sortingLayerID = i1895[6]
  i1894.sortingOrder = i1895[7]
  i1894.lightmapIndex = i1895[8]
  i1894.lightmapSceneIndex = i1895[9]
  i1894.lightmapScaleOffset = new pc.Vec4( i1895[10], i1895[11], i1895[12], i1895[13] )
  i1894.lightProbeUsage = i1895[14]
  i1894.reflectionProbeUsage = i1895[15]
  request.r(i1895[16], i1895[17], 0, i1894, 'mesh')
  i1894.meshCount = i1895[18]
  i1894.activeVertexStreamsCount = i1895[19]
  i1894.alignment = i1895[20]
  i1894.renderMode = i1895[21]
  i1894.sortMode = i1895[22]
  i1894.lengthScale = i1895[23]
  i1894.velocityScale = i1895[24]
  i1894.cameraVelocityScale = i1895[25]
  i1894.normalDirection = i1895[26]
  i1894.sortingFudge = i1895[27]
  i1894.minParticleSize = i1895[28]
  i1894.maxParticleSize = i1895[29]
  i1894.pivot = new pc.Vec3( i1895[30], i1895[31], i1895[32] )
  request.r(i1895[33], i1895[34], 0, i1894, 'trailMaterial')
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1899 = data
  i1898.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1899[0], i1898.main)
  i1898.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1899[1], i1898.colorBySpeed)
  i1898.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1899[2], i1898.colorOverLifetime)
  i1898.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1899[3], i1898.emission)
  i1898.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1899[4], i1898.rotationBySpeed)
  i1898.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1899[5], i1898.rotationOverLifetime)
  i1898.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1899[6], i1898.shape)
  i1898.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1899[7], i1898.sizeBySpeed)
  i1898.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1899[8], i1898.sizeOverLifetime)
  i1898.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1899[9], i1898.textureSheetAnimation)
  i1898.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1899[10], i1898.velocityOverLifetime)
  i1898.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1899[11], i1898.noise)
  i1898.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1899[12], i1898.inheritVelocity)
  i1898.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1899[13], i1898.forceOverLifetime)
  i1898.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1899[14], i1898.limitVelocityOverLifetime)
  i1898.useAutoRandomSeed = !!i1899[15]
  i1898.randomSeed = i1899[16]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1900 = root || new pc.ParticleSystemMain()
  var i1901 = data
  i1900.duration = i1901[0]
  i1900.loop = !!i1901[1]
  i1900.prewarm = !!i1901[2]
  i1900.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[3], i1900.startDelay)
  i1900.startDelayMultiplier = i1901[4]
  i1900.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[5], i1900.startLifetime)
  i1900.startLifetimeMultiplier = i1901[6]
  i1900.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[7], i1900.startSpeed)
  i1900.startSpeedMultiplier = i1901[8]
  i1900.startSize3D = !!i1901[9]
  i1900.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[10], i1900.startSize)
  i1900.startSizeMultiplier = i1901[11]
  i1900.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[12], i1900.startSizeX)
  i1900.startSizeXMultiplier = i1901[13]
  i1900.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[14], i1900.startSizeY)
  i1900.startSizeYMultiplier = i1901[15]
  i1900.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[16], i1900.startSizeZ)
  i1900.startSizeZMultiplier = i1901[17]
  i1900.startRotation3D = !!i1901[18]
  i1900.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[19], i1900.startRotation)
  i1900.startRotationMultiplier = i1901[20]
  i1900.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[21], i1900.startRotationX)
  i1900.startRotationXMultiplier = i1901[22]
  i1900.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[23], i1900.startRotationY)
  i1900.startRotationYMultiplier = i1901[24]
  i1900.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[25], i1900.startRotationZ)
  i1900.startRotationZMultiplier = i1901[26]
  i1900.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1901[27], i1900.startColor)
  i1900.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[28], i1900.gravityModifier)
  i1900.gravityModifierMultiplier = i1901[29]
  i1900.simulationSpace = i1901[30]
  request.r(i1901[31], i1901[32], 0, i1900, 'customSimulationSpace')
  i1900.simulationSpeed = i1901[33]
  i1900.useUnscaledTime = !!i1901[34]
  i1900.scalingMode = i1901[35]
  i1900.playOnAwake = !!i1901[36]
  i1900.maxParticles = i1901[37]
  i1900.emitterVelocityMode = i1901[38]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1902 = root || new pc.MinMaxCurve()
  var i1903 = data
  i1902.m_Mode = i1903[0]
  i1902.m_CurveMin = new pc.AnimationCurve( { keys_flow: i1903[1] } )
  i1902.m_CurveMax = new pc.AnimationCurve( { keys_flow: i1903[2] } )
  i1902.m_CurveMultiplier = i1903[3]
  i1902.m_ConstantMin = i1903[4]
  i1902.m_ConstantMax = i1903[5]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1904 = root || new pc.MinMaxGradient()
  var i1905 = data
  i1904.m_Mode = i1905[0]
  i1904.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1905[1], i1904.m_GradientMin)
  i1904.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1905[2], i1904.m_GradientMax)
  i1904.m_ColorMin = new pc.Color(i1905[3], i1905[4], i1905[5], i1905[6])
  i1904.m_ColorMax = new pc.Color(i1905[7], i1905[8], i1905[9], i1905[10])
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1907 = data
  i1906.mode = i1907[0]
  var i1909 = i1907[1]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1909[i + 0]) );
  }
  i1906.colorKeys = i1908
  var i1911 = i1907[2]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1911[i + 0]) );
  }
  i1906.alphaKeys = i1910
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1912 = root || new pc.ParticleSystemColorBySpeed()
  var i1913 = data
  i1912.enabled = !!i1913[0]
  i1912.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1913[1], i1912.color)
  i1912.range = new pc.Vec2( i1913[2], i1913[3] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1917 = data
  i1916.color = new pc.Color(i1917[0], i1917[1], i1917[2], i1917[3])
  i1916.time = i1917[4]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1921 = data
  i1920.alpha = i1921[0]
  i1920.time = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1922 = root || new pc.ParticleSystemColorOverLifetime()
  var i1923 = data
  i1922.enabled = !!i1923[0]
  i1922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1923[1], i1922.color)
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1924 = root || new pc.ParticleSystemEmitter()
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[1], i1924.rateOverTime)
  i1924.rateOverTimeMultiplier = i1925[2]
  i1924.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[3], i1924.rateOverDistance)
  i1924.rateOverDistanceMultiplier = i1925[4]
  var i1927 = i1925[5]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1927[i + 0]) );
  }
  i1924.bursts = i1926
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1930 = root || new pc.ParticleSystemBurst()
  var i1931 = data
  i1930.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[0], i1930.count)
  i1930.cycleCount = i1931[1]
  i1930.minCount = i1931[2]
  i1930.maxCount = i1931[3]
  i1930.repeatInterval = i1931[4]
  i1930.time = i1931[5]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemRotationBySpeed()
  var i1933 = data
  i1932.enabled = !!i1933[0]
  i1932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[1], i1932.x)
  i1932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[2], i1932.y)
  i1932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[3], i1932.z)
  i1932.xMultiplier = i1933[4]
  i1932.yMultiplier = i1933[5]
  i1932.zMultiplier = i1933[6]
  i1932.separateAxes = !!i1933[7]
  i1932.range = new pc.Vec2( i1933[8], i1933[9] )
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[1], i1934.x)
  i1934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[2], i1934.y)
  i1934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[3], i1934.z)
  i1934.xMultiplier = i1935[4]
  i1934.yMultiplier = i1935[5]
  i1934.zMultiplier = i1935[6]
  i1934.separateAxes = !!i1935[7]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemShape()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.shapeType = i1937[1]
  i1936.randomDirectionAmount = i1937[2]
  i1936.sphericalDirectionAmount = i1937[3]
  i1936.randomPositionAmount = i1937[4]
  i1936.alignToDirection = !!i1937[5]
  i1936.radius = i1937[6]
  i1936.radiusMode = i1937[7]
  i1936.radiusSpread = i1937[8]
  i1936.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[9], i1936.radiusSpeed)
  i1936.radiusSpeedMultiplier = i1937[10]
  i1936.radiusThickness = i1937[11]
  i1936.angle = i1937[12]
  i1936.length = i1937[13]
  i1936.boxThickness = new pc.Vec3( i1937[14], i1937[15], i1937[16] )
  i1936.meshShapeType = i1937[17]
  request.r(i1937[18], i1937[19], 0, i1936, 'mesh')
  request.r(i1937[20], i1937[21], 0, i1936, 'meshRenderer')
  request.r(i1937[22], i1937[23], 0, i1936, 'skinnedMeshRenderer')
  i1936.useMeshMaterialIndex = !!i1937[24]
  i1936.meshMaterialIndex = i1937[25]
  i1936.useMeshColors = !!i1937[26]
  i1936.normalOffset = i1937[27]
  i1936.arc = i1937[28]
  i1936.arcMode = i1937[29]
  i1936.arcSpread = i1937[30]
  i1936.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[31], i1936.arcSpeed)
  i1936.arcSpeedMultiplier = i1937[32]
  i1936.donutRadius = i1937[33]
  i1936.position = new pc.Vec3( i1937[34], i1937[35], i1937[36] )
  i1936.rotation = new pc.Vec3( i1937[37], i1937[38], i1937[39] )
  i1936.scale = new pc.Vec3( i1937[40], i1937[41], i1937[42] )
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemSizeBySpeed()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[1], i1938.size)
  i1938.sizeMultiplier = i1939[2]
  i1938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[3], i1938.x)
  i1938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[4], i1938.y)
  i1938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[5], i1938.z)
  i1938.xMultiplier = i1939[6]
  i1938.yMultiplier = i1939[7]
  i1938.zMultiplier = i1939[8]
  i1938.separateAxes = !!i1939[9]
  i1938.range = new pc.Vec2( i1939[10], i1939[11] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1941 = data
  i1940.enabled = !!i1941[0]
  i1940.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[1], i1940.size)
  i1940.sizeMultiplier = i1941[2]
  i1940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[3], i1940.x)
  i1940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[4], i1940.y)
  i1940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[5], i1940.z)
  i1940.xMultiplier = i1941[6]
  i1940.yMultiplier = i1941[7]
  i1940.zMultiplier = i1941[8]
  i1940.separateAxes = !!i1941[9]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.mode = i1943[1]
  i1942.animation = i1943[2]
  i1942.numTilesX = i1943[3]
  i1942.numTilesY = i1943[4]
  i1942.useRandomRow = !!i1943[5]
  i1942.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[6], i1942.frameOverTime)
  i1942.frameOverTimeMultiplier = i1943[7]
  i1942.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[8], i1942.startFrame)
  i1942.startFrameMultiplier = i1943[9]
  i1942.cycleCount = i1943[10]
  i1942.rowIndex = i1943[11]
  i1942.flipU = i1943[12]
  i1942.flipV = i1943[13]
  i1942.spriteCount = i1943[14]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[1], i1944.x)
  i1944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[2], i1944.y)
  i1944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[3], i1944.z)
  i1944.xMultiplier = i1945[4]
  i1944.yMultiplier = i1945[5]
  i1944.zMultiplier = i1945[6]
  i1944.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[7], i1944.speedModifier)
  i1944.speedModifierMultiplier = i1945[8]
  i1944.space = i1945[9]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1946 = root || new pc.ParticleSystemNoise()
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.separateAxes = !!i1947[1]
  i1946.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[2], i1946.strengthX)
  i1946.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[3], i1946.strengthY)
  i1946.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[4], i1946.strengthZ)
  i1946.strengthXMultiplier = i1947[5]
  i1946.strengthYMultiplier = i1947[6]
  i1946.strengthZMultiplier = i1947[7]
  i1946.frequency = i1947[8]
  i1946.damping = !!i1947[9]
  i1946.octaveCount = i1947[10]
  i1946.octaveMultiplier = i1947[11]
  i1946.octaveScale = i1947[12]
  i1946.quality = i1947[13]
  i1946.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[14], i1946.scrollSpeed)
  i1946.scrollSpeedMultiplier = i1947[15]
  i1946.remapEnabled = !!i1947[16]
  i1946.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[17], i1946.remapX)
  i1946.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[18], i1946.remapY)
  i1946.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[19], i1946.remapZ)
  i1946.remapXMultiplier = i1947[20]
  i1946.remapYMultiplier = i1947[21]
  i1946.remapZMultiplier = i1947[22]
  i1946.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[23], i1946.positionAmount)
  i1946.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[24], i1946.rotationAmount)
  i1946.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[25], i1946.sizeAmount)
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemInheritVelocity()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.mode = i1949[1]
  i1948.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.curve)
  i1948.curveMultiplier = i1949[3]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemForceOverLifetime()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[1], i1950.x)
  i1950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.y)
  i1950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.z)
  i1950.xMultiplier = i1951[4]
  i1950.yMultiplier = i1951[5]
  i1950.zMultiplier = i1951[6]
  i1950.space = i1951[7]
  i1950.randomized = !!i1951[8]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[1], i1952.limit)
  i1952.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.limitX)
  i1952.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[3], i1952.limitY)
  i1952.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[4], i1952.limitZ)
  i1952.limitMultiplier = i1953[5]
  i1952.limitXMultiplier = i1953[6]
  i1952.limitYMultiplier = i1953[7]
  i1952.limitZMultiplier = i1953[8]
  i1952.dampen = i1953[9]
  i1952.separateAxes = !!i1953[10]
  i1952.space = i1953[11]
  i1952.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[12], i1952.drag)
  i1952.dragMultiplier = i1953[13]
  i1952.multiplyDragByParticleSize = !!i1953[14]
  i1952.multiplyDragByParticleVelocity = !!i1953[15]
  return i1952
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i1954 = root || request.c( 'LootableItem' )
  var i1955 = data
  i1954.OnLootableItemCollected = request.d('LootableItemEvent', i1955[0], i1954.OnLootableItemCollected)
  request.r(i1955[1], i1955[2], 0, i1954, 'item')
  i1954.kind = i1955[3]
  return i1954
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i1956 = root || request.c( 'LootableItemEvent' )
  var i1957 = data
  i1956.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1957[0], i1956.m_PersistentCalls)
  return i1956
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1959 = data
  var i1961 = i1959[0]
  var i1960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.add(request.d('UnityEngine.Events.PersistentCall', i1961[i + 0]));
  }
  i1958.m_Calls = i1960
  return i1958
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'm_Target')
  i1964.m_MethodName = i1965[2]
  i1964.m_Mode = i1965[3]
  i1964.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1965[4], i1964.m_Arguments)
  i1964.m_CallState = i1965[5]
  return i1964
}

Deserializers["LightPole"] = function (request, data, root) {
  var i1966 = root || request.c( 'LightPole' )
  var i1967 = data
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1969 = data
  i1968.pivot = new pc.Vec2( i1969[0], i1969[1] )
  i1968.anchorMin = new pc.Vec2( i1969[2], i1969[3] )
  i1968.anchorMax = new pc.Vec2( i1969[4], i1969[5] )
  i1968.sizeDelta = new pc.Vec2( i1969[6], i1969[7] )
  i1968.anchoredPosition3D = new pc.Vec3( i1969[8], i1969[9], i1969[10] )
  i1968.rotation = new pc.Quat(i1969[11], i1969[12], i1969[13], i1969[14])
  i1968.scale = new pc.Vec3( i1969[15], i1969[16], i1969[17] )
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1971 = data
  i1970.cullTransparentMesh = !!i1971[0]
  return i1970
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.UI.Image' )
  var i1973 = data
  request.r(i1973[0], i1973[1], 0, i1972, 'm_Sprite')
  i1972.m_Type = i1973[2]
  i1972.m_PreserveAspect = !!i1973[3]
  i1972.m_FillCenter = !!i1973[4]
  i1972.m_FillMethod = i1973[5]
  i1972.m_FillAmount = i1973[6]
  i1972.m_FillClockwise = !!i1973[7]
  i1972.m_FillOrigin = i1973[8]
  i1972.m_UseSpriteMesh = !!i1973[9]
  i1972.m_PixelsPerUnitMultiplier = i1973[10]
  request.r(i1973[11], i1973[12], 0, i1972, 'm_Material')
  i1972.m_Maskable = !!i1973[13]
  i1972.m_Color = new pc.Color(i1973[14], i1973[15], i1973[16], i1973[17])
  i1972.m_RaycastTarget = !!i1973[18]
  return i1972
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i1974 = root || request.c( 'UIActiveBoost' )
  var i1975 = data
  i1974.TimeLeft = i1975[0]
  request.r(i1975[1], i1975[2], 0, i1974, 'imgIcon')
  request.r(i1975[3], i1975[4], 0, i1974, 'txtTimer')
  var i1977 = i1975[5]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('UIActiveBoost+SpriteByKind', i1977[i + 0]) );
  }
  i1974.sprites = i1976
  i1974.Kind = i1975[6]
  return i1974
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i1980 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i1981 = data
  i1980.Kind = i1981[0]
  request.r(i1981[1], i1981[2], 0, i1980, 'Sprite')
  return i1980
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1983 = data
  i1982.m_IgnoreLayout = !!i1983[0]
  i1982.m_MinWidth = i1983[1]
  i1982.m_MinHeight = i1983[2]
  i1982.m_PreferredWidth = i1983[3]
  i1982.m_PreferredHeight = i1983[4]
  i1982.m_FlexibleWidth = i1983[5]
  i1982.m_FlexibleHeight = i1983[6]
  i1982.m_LayoutPriority = i1983[7]
  return i1982
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.Text' )
  var i1985 = data
  i1984.m_FontData = request.d('UnityEngine.UI.FontData', i1985[0], i1984.m_FontData)
  i1984.m_Text = i1985[1]
  request.r(i1985[2], i1985[3], 0, i1984, 'm_Material')
  i1984.m_Maskable = !!i1985[4]
  i1984.m_Color = new pc.Color(i1985[5], i1985[6], i1985[7], i1985[8])
  i1984.m_RaycastTarget = !!i1985[9]
  return i1984
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'm_Font')
  i1986.m_FontSize = i1987[2]
  i1986.m_FontStyle = i1987[3]
  i1986.m_BestFit = !!i1987[4]
  i1986.m_MinSize = i1987[5]
  i1986.m_MaxSize = i1987[6]
  i1986.m_Alignment = i1987[7]
  i1986.m_AlignByGeometry = !!i1987[8]
  i1986.m_RichText = !!i1987[9]
  i1986.m_HorizontalOverflow = i1987[10]
  i1986.m_VerticalOverflow = i1987[11]
  i1986.m_LineSpacing = i1987[12]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1989 = data
  i1988.mass = i1989[0]
  i1988.drag = i1989[1]
  i1988.angularDrag = i1989[2]
  i1988.useGravity = !!i1989[3]
  i1988.isKinematic = !!i1989[4]
  i1988.constraints = i1989[5]
  i1988.maxAngularVelocity = i1989[6]
  i1988.collisionDetectionMode = i1989[7]
  i1988.interpolation = i1989[8]
  return i1988
}

Deserializers["CarController"] = function (request, data, root) {
  var i1990 = root || request.c( 'CarController' )
  var i1991 = data
  var i1993 = i1991[0]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 2, i1992, '')
  }
  i1990.m_WheelColliders = i1992
  i1990.TorqueMultiplier = i1991[1]
  i1990.m_CarDriveType = i1991[2]
  var i1995 = i1991[3]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 2) {
  request.r(i1995[i + 0], i1995[i + 1], 2, i1994, '')
  }
  i1990.m_WheelMeshes = i1994
  var i1997 = i1991[4]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 2, i1996, '')
  }
  i1990.m_WheelEffects = i1996
  i1990.m_CentreOfMassOffset = new pc.Vec3( i1991[5], i1991[6], i1991[7] )
  i1990.m_MaximumSteerAngle = i1991[8]
  i1990.m_SteerHelper = i1991[9]
  i1990.m_TractionControl = i1991[10]
  i1990.m_FullTorqueOverAllWheels = i1991[11]
  i1990.m_ReverseTorque = i1991[12]
  i1990.m_MaxHandbrakeTorque = i1991[13]
  i1990.m_Downforce = i1991[14]
  i1990.m_SpeedType = i1991[15]
  i1990.m_Topspeed = i1991[16]
  i1990.m_RevRangeBoundary = i1991[17]
  i1990.m_SlipLimit = i1991[18]
  i1990.m_BrakeTorque = i1991[19]
  i1990.m_GearNum = i1991[20]
  request.r(i1991[21], i1991[22], 0, i1990, 'm_Rigidbody')
  return i1990
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i2004 = root || request.c( 'CarUserControl' )
  var i2005 = data
  i2004.CanMove = !!i2005[0]
  request.r(i2005[1], i2005[2], 0, i2004, 'pathCreator')
  request.r(i2005[3], i2005[4], 0, i2004, 'playerCarrot')
  request.r(i2005[5], i2005[6], 0, i2004, 'ghostWriter')
  request.r(i2005[7], i2005[8], 0, i2004, 'carBody')
  request.r(i2005[9], i2005[10], 0, i2004, 'collisionParticlesLeft')
  request.r(i2005[11], i2005[12], 0, i2004, 'collisionParticlesRight')
  return i2004
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i2006 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i2007 = data
  i2006.engineSoundStyle = i2007[0]
  request.r(i2007[1], i2007[2], 0, i2006, 'lowAccelClip')
  request.r(i2007[3], i2007[4], 0, i2006, 'lowDecelClip')
  request.r(i2007[5], i2007[6], 0, i2006, 'highAccelClip')
  request.r(i2007[7], i2007[8], 0, i2006, 'highDecelClip')
  i2006.pitchMultiplier = i2007[9]
  i2006.lowPitchMin = i2007[10]
  i2006.lowPitchMax = i2007[11]
  i2006.highPitchMultiplier = i2007[12]
  i2006.maxRolloffDistance = i2007[13]
  i2006.dopplerLevel = i2007[14]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2009 = data
  i2008.center = new pc.Vec3( i2009[0], i2009[1], i2009[2] )
  i2008.size = new pc.Vec3( i2009[3], i2009[4], i2009[5] )
  i2008.enabled = !!i2009[6]
  i2008.isTrigger = !!i2009[7]
  request.r(i2009[8], i2009[9], 0, i2008, 'material')
  return i2008
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i2010 = root || request.c( 'RaceCar' )
  var i2011 = data
  i2010.Owner = i2011[0]
  i2010.Score = i2011[1]
  request.r(i2011[2], i2011[3], 0, i2010, 'boosts')
  request.r(i2011[4], i2011[5], 0, i2010, 'products')
  request.r(i2011[6], i2011[7], 0, i2010, 'boostsEffectPosition')
  request.r(i2011[8], i2011[9], 0, i2010, 'effectSheildPrefab')
  request.r(i2011[10], i2011[11], 0, i2010, 'effectDoublePrefab')
  return i2010
}

Deserializers["HealthController"] = function (request, data, root) {
  var i2012 = root || request.c( 'HealthController' )
  var i2013 = data
  i2012.Health = i2013[0]
  i2012.MaxHealth = i2013[1]
  i2012.Shield = i2013[2]
  i2012.MaxShield = i2013[3]
  request.r(i2013[4], i2013[5], 0, i2012, 'MainScreen')
  request.r(i2013[6], i2013[7], 0, i2012, 'LossScreen')
  request.r(i2013[8], i2013[9], 0, i2012, 'boosts')
  return i2012
}

Deserializers["Gun"] = function (request, data, root) {
  var i2014 = root || request.c( 'Gun' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'rocketPrefab')
  request.r(i2015[2], i2015[3], 0, i2014, 'aim')
  request.r(i2015[4], i2015[5], 0, i2014, 'carUserControl')
  request.r(i2015[6], i2015[7], 0, i2014, 'products')
  return i2014
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i2016 = root || request.c( 'JustWheelMeshes' )
  var i2017 = data
  var i2019 = i2017[0]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 2, i2018, '')
  }
  i2016.m_WheelMeshes = i2018
  return i2016
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i2020 = root || request.c( 'BlobShadowMovement' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'Target')
  i2020.Offset = new pc.Vec3( i2021[2], i2021[3], i2021[4] )
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'clip')
  i2022.playOnAwake = !!i2023[2]
  i2022.loop = !!i2023[3]
  i2022.enabled = !!i2023[4]
  return i2022
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i2024 = root || request.c( 'WheelEffects' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'SkidTrailPrefab')
  request.r(i2025[2], i2025[3], 0, i2024, 'skidParticles')
  return i2024
}

Deserializers["Rocket"] = function (request, data, root) {
  var i2026 = root || request.c( 'Rocket' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'jetStream')
  request.r(i2027[2], i2027[3], 0, i2026, 'explosionPrefab')
  return i2026
}

Deserializers["Explosion"] = function (request, data, root) {
  var i2028 = root || request.c( 'Explosion' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'explosionParticleSystem')
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'animatorController')
  i2030.updateMode = i2031[2]
  var i2033 = i2031[3]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 2, i2032, '')
  }
  i2030.humanBones = i2032
  i2030.enabled = !!i2031[4]
  return i2030
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i2036 = root || request.c( 'DriverDescription' )
  var i2037 = data
  var i2039 = i2037[0]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2036.driverPrefab = i2038
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2041 = data
  i2040.enabled = !!i2041[0]
  request.r(i2041[1], i2041[2], 0, i2040, 'sharedMaterial')
  var i2043 = i2041[3]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 2, i2042, '')
  }
  i2040.sharedMaterials = i2042
  i2040.receiveShadows = !!i2041[4]
  i2040.shadowCastingMode = i2041[5]
  i2040.sortingLayerID = i2041[6]
  i2040.sortingOrder = i2041[7]
  i2040.lightmapIndex = i2041[8]
  i2040.lightmapSceneIndex = i2041[9]
  i2040.lightmapScaleOffset = new pc.Vec4( i2041[10], i2041[11], i2041[12], i2041[13] )
  i2040.lightProbeUsage = i2041[14]
  i2040.reflectionProbeUsage = i2041[15]
  request.r(i2041[16], i2041[17], 0, i2040, 'sharedMesh')
  var i2045 = i2041[18]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 2, i2044, '')
  }
  i2040.bones = i2044
  i2040.updateWhenOffscreen = !!i2041[19]
  i2040.localBounds = i2041[20]
  request.r(i2041[21], i2041[22], 0, i2040, 'rootBone')
  var i2047 = i2041[23]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2047[i + 0]) );
  }
  i2040.blendShapesWeights = i2046
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2051 = data
  i2050.weight = i2051[0]
  return i2050
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i2052 = root || request.c( 'TrackHandles' )
  var i2053 = data
  request.r(i2053[0], i2053[1], 0, i2052, 'MainPath')
  i2052.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i2053[2], i2052.OnFinishReached)
  request.r(i2053[3], i2053[4], 0, i2052, 'Root')
  return i2052
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2055 = data
  i2054.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2055[0], i2054.m_PersistentCalls)
  return i2054
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i2056 = root || request.c( 'FinishTrigger' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'trackHandles')
  return i2056
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i2058 = root || request.c( 'PathCreation.PathCreator' )
  var i2059 = data
  i2058.editorData = request.d('PathCreation.PathCreatorData', i2059[0], i2058.editorData)
  i2058.initialized = !!i2059[1]
  return i2058
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i2060 = root || request.c( 'PathCreation.PathCreatorData' )
  var i2061 = data
  i2060.vertexPathMaxAngleError = i2061[0]
  i2060.vertexPathMinVertexSpacing = i2061[1]
  i2060.showTransformTool = !!i2061[2]
  i2060.showPathBounds = !!i2061[3]
  i2060.showPerSegmentBounds = !!i2061[4]
  i2060.displayAnchorPoints = !!i2061[5]
  i2060.displayControlPoints = !!i2061[6]
  i2060.bezierHandleScale = i2061[7]
  i2060.globalDisplaySettingsFoldout = !!i2061[8]
  i2060.keepConstantHandleSize = !!i2061[9]
  i2060.showNormalsInVertexMode = !!i2061[10]
  i2060.showBezierPathInVertexMode = !!i2061[11]
  i2060.showDisplayOptions = !!i2061[12]
  i2060.showPathOptions = !!i2061[13]
  i2060.showVertexPathDisplayOptions = !!i2061[14]
  i2060.showVertexPathOptions = !!i2061[15]
  i2060.showNormals = !!i2061[16]
  i2060.showNormalsHelpInfo = !!i2061[17]
  i2060.tabIndex = i2061[18]
  i2060._bezierPath = request.d('PathCreation.BezierPath', i2061[19], i2060._bezierPath)
  i2060.vertexPathUpToDate = !!i2061[20]
  return i2060
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i2062 = root || request.c( 'PathCreation.BezierPath' )
  var i2063 = data
  var i2065 = i2063[0]
  var i2064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2065.length; i += 3) {
    i2064.add(new pc.Vec3( i2065[i + 0], i2065[i + 1], i2065[i + 2] ));
  }
  i2062.points = i2064
  i2062.isClosed = !!i2063[1]
  i2062.space = i2063[2]
  i2062.controlMode = i2063[3]
  i2062.autoControlLength = i2063[4]
  i2062.boundsUpToDate = !!i2063[5]
  var i2067 = i2063[6]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(i2067[i + 0]);
  }
  i2062.perAnchorNormalsAngle = i2066
  i2062.globalNormalsAngle = i2063[7]
  i2062.flipNormals = !!i2063[8]
  return i2062
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2072 = root || request.c( 'GameManager' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'MainCamera')
  i2072.LandscapeFov = i2073[2]
  i2072.PortraitFov = i2073[3]
  i2072.WheatCullDistance = i2073[4]
  request.r(i2073[5], i2073[6], 0, i2072, 'CountdownWidget')
  request.r(i2073[7], i2073[8], 0, i2072, 'TutorialWindow')
  request.r(i2073[9], i2073[10], 0, i2072, 'MainBackroundImage')
  request.r(i2073[11], i2073[12], 0, i2072, 'WinScreen')
  request.r(i2073[13], i2073[14], 0, i2072, 'LoseScreen')
  request.r(i2073[15], i2073[16], 0, i2072, 'MainScreen')
  request.r(i2073[17], i2073[18], 0, i2072, 'btnLeft')
  request.r(i2073[19], i2073[20], 0, i2072, 'btnRight')
  request.r(i2073[21], i2073[22], 0, i2072, 'healthBar')
  var i2075 = i2073[23]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 2, i2074, '')
  }
  i2072.Opponents = i2074
  request.r(i2073[24], i2073[25], 0, i2072, 'PlayerCar')
  request.r(i2073[26], i2073[27], 0, i2072, 'CarUserControl')
  i2072.Position = i2073[28]
  request.r(i2073[29], i2073[30], 0, i2072, 'LastCheckpoint')
  request.r(i2073[31], i2073[32], 0, i2072, 'healthController')
  var i2077 = i2073[33]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 2) {
  request.r(i2077[i + 0], i2077[i + 1], 2, i2076, '')
  }
  i2072.tracktors = i2076
  var i2079 = i2073[34]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 2, i2078, '')
  }
  i2072.drivers = i2078
  var i2081 = i2073[35]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2072.trackPrefabs = i2080
  request.r(i2073[36], i2073[37], 0, i2072, 'trackParent')
  i2072._WheatCullDistance = i2073[38]
  request.r(i2073[39], i2073[40], 0, i2072, 'trackContentGenerator')
  request.r(i2073[41], i2073[42], 0, i2072, 'wheatGenerator')
  request.r(i2073[43], i2073[44], 0, i2072, 'ghostReader')
  return i2072
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i2086 = root || request.c( 'LunaUIFields' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'ObjectiveHintText')
  i2086.ObjectiveHintString = i2087[2]
  request.r(i2087[3], i2087[4], 0, i2086, 'LevelFailedButtonText')
  i2086.LevelFailedButtonString = i2087[5]
  request.r(i2087[6], i2087[7], 0, i2086, 'LevelCompleteButtonText')
  i2086.LevelCompleteButtonString = i2087[8]
  return i2086
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i2088 = root || request.c( 'WheatGenerator' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'wheatPiece')
  request.r(i2089[2], i2089[3], 0, i2088, 'wheatParent')
  request.r(i2089[4], i2089[5], 0, i2088, 'trackContentGenerator')
  request.r(i2089[6], i2089[7], 0, i2088, 'carUserControl')
  return i2088
}

Deserializers["Products"] = function (request, data, root) {
  var i2090 = root || request.c( 'Products' )
  var i2091 = data
  i2090.OnProductsNumberChanged = request.d('ProductsEvent', i2091[0], i2090.OnProductsNumberChanged)
  return i2090
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i2092 = root || request.c( 'ProductsEvent' )
  var i2093 = data
  i2092.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2093[0], i2092.m_PersistentCalls)
  return i2092
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i2094 = root || request.c( 'TrackContentGenerator' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'healthController')
  var i2097 = i2095[2]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 1, i2096, '')
  }
  i2094.AlreadyGenerated = i2096
  request.r(i2095[3], i2095[4], 0, i2094, 'parentForPlacing')
  var i2099 = i2095[5]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 2, i2098, '')
  }
  i2094.obstaclesPrefabs = i2098
  var i2101 = i2095[6]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2094.hardObstaclesPrefabs = i2100
  var i2103 = i2095[7]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2094.bonusesPrefabs = i2102
  request.r(i2095[8], i2095[9], 0, i2094, 'configFile')
  request.r(i2095[10], i2095[11], 0, i2094, 'products')
  request.r(i2095[12], i2095[13], 0, i2094, 'boosts')
  return i2094
}

Deserializers["Boosts"] = function (request, data, root) {
  var i2106 = root || request.c( 'Boosts' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.add(request.d('Boosts+DataItem', i2109[i + 0]));
  }
  i2106.Data = i2108
  return i2106
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i2112 = root || request.c( 'Boosts+DataItem' )
  var i2113 = data
  i2112.Kind = i2113[0]
  i2112.TimeLeft = i2113[1]
  return i2112
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i2114 = root || request.c( 'GhostWriter' )
  var i2115 = data
  i2114.timer = i2115[0]
  var i2117 = i2115[1]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('GhostWriter+Entry', i2117[i + 0]));
  }
  i2114.data = i2116
  request.r(i2115[2], i2115[3], 0, i2114, 'carUserControl')
  return i2114
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i2120 = root || request.c( 'GhostWriter+Entry' )
  var i2121 = data
  i2120.kind = i2121[0]
  i2120.time = i2121[1]
  i2120.distance = i2121[2]
  i2120.sideOffset = i2121[3]
  i2120.speed = i2121[4]
  return i2120
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i2122 = root || request.c( 'GhostReader' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'ghost')
  request.r(i2123[2], i2123[3], 0, i2122, 'pathCreator')
  i2122.timer = i2123[4]
  var i2125 = i2123[5]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(request.d('GhostReader+Entry', i2125[i + 0]));
  }
  i2122.data = i2124
  return i2122
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i2128 = root || request.c( 'GhostReader+Entry' )
  var i2129 = data
  i2128.kind = i2129[0]
  i2128.time = i2129[1]
  i2128.distance = i2129[2]
  i2128.sideOffset = i2129[3]
  i2128.speed = i2129[4]
  return i2128
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i2131 = data
  i2130.m_MoveSpeed = i2131[0]
  i2130.m_TurnSpeed = i2131[1]
  i2130.m_RollSpeed = i2131[2]
  i2130.m_FollowVelocity = !!i2131[3]
  i2130.m_FollowTilt = !!i2131[4]
  i2130.m_SpinTurnLimit = i2131[5]
  i2130.m_TargetVelocityLowerLimit = i2131[6]
  i2130.m_SmoothTurnTime = i2131[7]
  request.r(i2131[8], i2131[9], 0, i2130, 'm_Target')
  i2130.m_AutoTargetPlayer = !!i2131[10]
  i2130.m_UpdateType = i2131[11]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2133 = data
  i2132.enabled = !!i2133[0]
  i2132.aspect = i2133[1]
  i2132.orthographic = !!i2133[2]
  i2132.orthographicSize = i2133[3]
  i2132.backgroundColor = new pc.Color(i2133[4], i2133[5], i2133[6], i2133[7])
  i2132.nearClipPlane = i2133[8]
  i2132.farClipPlane = i2133[9]
  i2132.fieldOfView = i2133[10]
  i2132.depth = i2133[11]
  i2132.clearFlags = i2133[12]
  i2132.cullingMask = i2133[13]
  i2132.rect = i2133[14]
  request.r(i2133[15], i2133[16], 0, i2132, 'targetTexture')
  return i2132
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i2134 = root || request.c( 'CameraFollower' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'Target')
  i2134.PositionOffset = new pc.Vec3( i2135[2], i2135[3], i2135[4] )
  i2134.RotationOffset = new pc.Vec3( i2135[5], i2135[6], i2135[7] )
  i2134.CameraSpeed = i2135[8]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2137 = data
  i2136.enabled = !!i2137[0]
  i2136.type = i2137[1]
  i2136.color = new pc.Color(i2137[2], i2137[3], i2137[4], i2137[5])
  i2136.cullingMask = i2137[6]
  i2136.intensity = i2137[7]
  i2136.range = i2137[8]
  i2136.spotAngle = i2137[9]
  i2136.shadows = i2137[10]
  i2136.shadowNormalBias = i2137[11]
  i2136.shadowBias = i2137[12]
  i2136.shadowStrength = i2137[13]
  i2136.lightmapBakeType = i2137[14]
  i2136.renderMode = i2137[15]
  request.r(i2137[16], i2137[17], 0, i2136, 'cookie')
  i2136.cookieSize = i2137[18]
  return i2136
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'm_FirstSelected')
  i2138.m_sendNavigationEvents = !!i2139[2]
  i2138.m_DragThreshold = i2139[3]
  return i2138
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2141 = data
  i2140.m_HorizontalAxis = i2141[0]
  i2140.m_VerticalAxis = i2141[1]
  i2140.m_SubmitButton = i2141[2]
  i2140.m_CancelButton = i2141[3]
  i2140.m_InputActionsPerSecond = i2141[4]
  i2140.m_RepeatDelay = i2141[5]
  i2140.m_ForceModuleActive = !!i2141[6]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.planeDistance = i2143[1]
  i2142.referencePixelsPerUnit = i2143[2]
  i2142.isFallbackOverlay = !!i2143[3]
  i2142.renderMode = i2143[4]
  i2142.renderOrder = i2143[5]
  i2142.sortingLayerName = i2143[6]
  i2142.sortingOrder = i2143[7]
  i2142.scaleFactor = i2143[8]
  request.r(i2143[9], i2143[10], 0, i2142, 'worldCamera')
  i2142.overrideSorting = !!i2143[11]
  i2142.pixelPerfect = !!i2143[12]
  i2142.targetDisplay = i2143[13]
  i2142.overridePixelPerfect = !!i2143[14]
  return i2142
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2145 = data
  i2144.m_UiScaleMode = i2145[0]
  i2144.m_ReferencePixelsPerUnit = i2145[1]
  i2144.m_ScaleFactor = i2145[2]
  i2144.m_ReferenceResolution = new pc.Vec2( i2145[3], i2145[4] )
  i2144.m_ScreenMatchMode = i2145[5]
  i2144.m_MatchWidthOrHeight = i2145[6]
  i2144.m_PhysicalUnit = i2145[7]
  i2144.m_FallbackScreenDPI = i2145[8]
  i2144.m_DefaultSpriteDPI = i2145[9]
  i2144.m_DynamicPixelsPerUnit = i2145[10]
  return i2144
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2147 = data
  i2146.m_IgnoreReversedGraphics = !!i2147[0]
  i2146.m_BlockingObjects = i2147[1]
  i2146.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2147[2] )
  return i2146
}

Deserializers["Countdown"] = function (request, data, root) {
  var i2148 = root || request.c( 'Countdown' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'CountdownText')
  request.r(i2149[2], i2149[3], 0, i2148, 'Go_Image')
  request.r(i2149[4], i2149[5], 0, i2148, 'Outline')
  request.r(i2149[6], i2149[7], 0, i2148, 'MainWindow')
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2151 = data
  i2150.m_Alpha = i2151[0]
  i2150.m_Interactable = !!i2151[1]
  i2150.m_BlocksRaycasts = !!i2151[2]
  i2150.m_IgnoreParentGroups = !!i2151[3]
  i2150.enabled = !!i2151[4]
  return i2150
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2153 = data
  i2152.m_EffectColor = new pc.Color(i2153[0], i2153[1], i2153[2], i2153[3])
  i2152.m_EffectDistance = new pc.Vec2( i2153[4], i2153[5] )
  i2152.m_UseGraphicAlpha = !!i2153[6]
  return i2152
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i2154 = root || request.c( 'WinScreenWidget' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'RaceCar')
  request.r(i2155[2], i2155[3], 0, i2154, 'WheatText')
  request.r(i2155[4], i2155[5], 0, i2154, 'GemText')
  request.r(i2155[6], i2155[7], 0, i2154, 'GameManager')
  request.r(i2155[8], i2155[9], 0, i2154, 'products')
  return i2154
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.UI.Button' )
  var i2157 = data
  i2156.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2157[0], i2156.m_OnClick)
  i2156.m_Navigation = request.d('UnityEngine.UI.Navigation', i2157[1], i2156.m_Navigation)
  i2156.m_Transition = i2157[2]
  i2156.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2157[3], i2156.m_Colors)
  i2156.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2157[4], i2156.m_SpriteState)
  i2156.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2157[5], i2156.m_AnimationTriggers)
  i2156.m_Interactable = !!i2157[6]
  request.r(i2157[7], i2157[8], 0, i2156, 'm_TargetGraphic')
  return i2156
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2159 = data
  i2158.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2159[0], i2158.m_PersistentCalls)
  return i2158
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2161 = data
  i2160.m_Mode = i2161[0]
  request.r(i2161[1], i2161[2], 0, i2160, 'm_SelectOnUp')
  request.r(i2161[3], i2161[4], 0, i2160, 'm_SelectOnDown')
  request.r(i2161[5], i2161[6], 0, i2160, 'm_SelectOnLeft')
  request.r(i2161[7], i2161[8], 0, i2160, 'm_SelectOnRight')
  return i2160
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2163 = data
  i2162.m_NormalColor = new pc.Color(i2163[0], i2163[1], i2163[2], i2163[3])
  i2162.m_HighlightedColor = new pc.Color(i2163[4], i2163[5], i2163[6], i2163[7])
  i2162.m_PressedColor = new pc.Color(i2163[8], i2163[9], i2163[10], i2163[11])
  i2162.m_SelectedColor = new pc.Color(i2163[12], i2163[13], i2163[14], i2163[15])
  i2162.m_DisabledColor = new pc.Color(i2163[16], i2163[17], i2163[18], i2163[19])
  i2162.m_ColorMultiplier = i2163[20]
  i2162.m_FadeDuration = i2163[21]
  return i2162
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'm_HighlightedSprite')
  request.r(i2165[2], i2165[3], 0, i2164, 'm_PressedSprite')
  request.r(i2165[4], i2165[5], 0, i2164, 'm_SelectedSprite')
  request.r(i2165[6], i2165[7], 0, i2164, 'm_DisabledSprite')
  return i2164
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2167 = data
  i2166.m_NormalTrigger = i2167[0]
  i2166.m_HighlightedTrigger = i2167[1]
  i2166.m_PressedTrigger = i2167[2]
  i2166.m_SelectedTrigger = i2167[3]
  i2166.m_DisabledTrigger = i2167[4]
  return i2166
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i2168 = root || request.c( 'EndGameButton' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, 'GameManager')
  return i2168
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'm_ObjectArgument')
  i2170.m_ObjectArgumentAssemblyTypeName = i2171[2]
  i2170.m_IntArgument = i2171[3]
  i2170.m_FloatArgument = i2171[4]
  i2170.m_StringArgument = i2171[5]
  i2170.m_BoolArgument = !!i2171[6]
  return i2170
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2173 = data
  request.r(i2173[0], i2173[1], 0, i2172, 'm_FillRect')
  request.r(i2173[2], i2173[3], 0, i2172, 'm_HandleRect')
  i2172.m_Direction = i2173[4]
  i2172.m_MinValue = i2173[5]
  i2172.m_MaxValue = i2173[6]
  i2172.m_WholeNumbers = !!i2173[7]
  i2172.m_Value = i2173[8]
  i2172.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2173[9], i2172.m_OnValueChanged)
  i2172.m_Navigation = request.d('UnityEngine.UI.Navigation', i2173[10], i2172.m_Navigation)
  i2172.m_Transition = i2173[11]
  i2172.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2173[12], i2172.m_Colors)
  i2172.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2173[13], i2172.m_SpriteState)
  i2172.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2173[14], i2172.m_AnimationTriggers)
  i2172.m_Interactable = !!i2173[15]
  request.r(i2173[16], i2173[17], 0, i2172, 'm_TargetGraphic')
  return i2172
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2175 = data
  i2174.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2175[0], i2174.m_PersistentCalls)
  return i2174
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i2176 = root || request.c( 'WheatSliderWidget' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'Slider')
  request.r(i2177[2], i2177[3], 0, i2176, 'gameManager')
  request.r(i2177[4], i2177[5], 0, i2176, 'BarIconImage')
  request.r(i2177[6], i2177[7], 0, i2176, 'WheatImage')
  i2176.MaxWheat = i2177[8]
  request.r(i2177[9], i2177[10], 0, i2176, 'products')
  return i2176
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i2178 = root || request.c( 'LongTapButton' )
  var i2179 = data
  i2178.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2179[0], i2178.OnMouseDownEvent)
  i2178.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2179[1], i2178.OnMouseUpEvent)
  return i2178
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i2180 = root || request.c( 'HealthBar' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'Slider')
  request.r(i2181[2], i2181[3], 0, i2180, 'HealthProvider')
  request.r(i2181[4], i2181[5], 0, i2180, 'BarIconImage')
  return i2180
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i2182 = root || request.c( 'ShootButtonCtrl' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'txtPew')
  request.r(i2183[2], i2183[3], 0, i2182, 'txtNoAmmo')
  request.r(i2183[4], i2183[5], 0, i2182, 'products')
  return i2182
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2185 = data
  i2184.m_Spacing = i2185[0]
  i2184.m_ChildForceExpandWidth = !!i2185[1]
  i2184.m_ChildForceExpandHeight = !!i2185[2]
  i2184.m_ChildControlWidth = !!i2185[3]
  i2184.m_ChildControlHeight = !!i2185[4]
  i2184.m_ChildScaleWidth = !!i2185[5]
  i2184.m_ChildScaleHeight = !!i2185[6]
  i2184.m_Padding = UnityEngine.RectOffset.FromPaddings(i2185[7], i2185[8], i2185[9], i2185[10])
  i2184.m_ChildAlignment = i2185[11]
  return i2184
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i2186 = root || request.c( 'BoostsPanelCtrl' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'boosts')
  request.r(i2187[2], i2187[3], 0, i2186, 'wgtBoostPrefab')
  return i2186
}

Deserializers["RocketsPanelCtrl"] = function (request, data, root) {
  var i2188 = root || request.c( 'RocketsPanelCtrl' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'products')
  request.r(i2189[2], i2189[3], 0, i2188, 'rocketPrefab')
  return i2188
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i2190 = root || request.c( 'ShieldBar' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'slider')
  request.r(i2191[2], i2191[3], 0, i2190, 'healthController')
  request.r(i2191[4], i2191[5], 0, i2190, 'barIconImage')
  request.r(i2191[6], i2191[7], 0, i2190, 'allUI')
  return i2190
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i2192 = root || request.c( 'TimeSinceStartup' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'Text')
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.atlasId = i2195[1]
  i2194.mipmapCount = i2195[2]
  i2194.hdr = !!i2195[3]
  i2194.size = i2195[4]
  i2194.anisoLevel = i2195[5]
  i2194.filterMode = i2195[6]
  i2194.wrapMode = i2195[7]
  var i2197 = i2195[8]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 4) {
    i2196.push( UnityEngine.Rect.MinMaxRect(i2197[i + 0], i2197[i + 1], i2197[i + 2], i2197[i + 3]) );
  }
  i2194.rects = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2201 = data
  i2200.name = i2201[0]
  i2200.index = i2201[1]
  i2200.startup = !!i2201[2]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2203 = data
  i2202.ambientIntensity = i2203[0]
  i2202.reflectionIntensity = i2203[1]
  i2202.ambientMode = i2203[2]
  i2202.ambientLight = new pc.Color(i2203[3], i2203[4], i2203[5], i2203[6])
  i2202.ambientSkyColor = new pc.Color(i2203[7], i2203[8], i2203[9], i2203[10])
  i2202.ambientGroundColor = new pc.Color(i2203[11], i2203[12], i2203[13], i2203[14])
  i2202.ambientEquatorColor = new pc.Color(i2203[15], i2203[16], i2203[17], i2203[18])
  i2202.fogColor = new pc.Color(i2203[19], i2203[20], i2203[21], i2203[22])
  i2202.fogEndDistance = i2203[23]
  i2202.fogStartDistance = i2203[24]
  i2202.fogDensity = i2203[25]
  i2202.fog = !!i2203[26]
  request.r(i2203[27], i2203[28], 0, i2202, 'skybox')
  i2202.fogMode = i2203[29]
  var i2205 = i2203[30]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2205[i + 0]) );
  }
  i2202.lightmaps = i2204
  i2202.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2203[31], i2202.lightProbes)
  i2202.lightmapsMode = i2203[32]
  i2202.environmentLightingMode = i2203[33]
  i2202.ambientProbe = new pc.SphericalHarmonicsL2(i2203[34])
  request.r(i2203[35], i2203[36], 0, i2202, 'customReflection')
  request.r(i2203[37], i2203[38], 0, i2202, 'defaultReflection')
  i2202.defaultReflectionMode = i2203[39]
  i2202.defaultReflectionResolution = i2203[40]
  i2202.sunLightObjectId = i2203[41]
  i2202.pixelLightCount = i2203[42]
  i2202.defaultReflectionHDR = !!i2203[43]
  i2202.hasLightDataAsset = !!i2203[44]
  i2202.hasManualGenerate = !!i2203[45]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'lightmapColor')
  request.r(i2209[2], i2209[3], 0, i2208, 'lightmapDirection')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2210 = root || new UnityEngine.LightProbes()
  var i2211 = data
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2219 = data
  i2218.name = i2219[0]
  var i2221 = i2219[1]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2221[i + 0]) );
  }
  i2218.passes = i2220
  var i2223 = i2219[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2223[i + 0]) );
  }
  i2218.defaultParameterValues = i2222
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2226 = root || new pc.UnityShaderPass()
  var i2227 = data
  i2226.passType = i2227[0]
  i2226.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[1], i2226.zTest)
  i2226.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[2], i2226.zWrite)
  i2226.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[3], i2226.culling)
  i2226.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2227[4], i2226.blending)
  i2226.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2227[5], i2226.alphaBlending)
  i2226.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[6], i2226.colorWriteMask)
  i2226.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[7], i2226.offsetUnits)
  i2226.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[8], i2226.offsetFactor)
  i2226.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[9], i2226.stencilRef)
  i2226.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[10], i2226.stencilReadMask)
  i2226.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2227[11], i2226.stencilWriteMask)
  i2226.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2227[12], i2226.stencilOp)
  i2226.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2227[13], i2226.stencilOpFront)
  i2226.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2227[14], i2226.stencilOpBack)
  var i2229 = i2227[15]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2229[i + 0]) );
  }
  i2226.tags = i2228
  var i2231 = i2227[16]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2231[i + 0]) );
  }
  i2226.variants = i2230
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2233 = data
  i2232.val = i2233[0]
  i2232.name = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2235 = data
  i2234.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[0], i2234.src)
  i2234.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[1], i2234.dst)
  i2234.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[2], i2234.op)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2237 = data
  i2236.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[0], i2236.pass)
  i2236.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[1], i2236.fail)
  i2236.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[2], i2236.zFail)
  i2236.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2237[3], i2236.comp)
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.value = i2241[1]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2245 = data
  var i2247 = i2245[0]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( i2247[i + 0] );
  }
  i2244.keywords = i2246
  i2244.vertexProgram = i2245[1]
  i2244.fragmentProgram = i2245[2]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.type = i2253[1]
  i2252.value = new pc.Vec4( i2253[2], i2253[3], i2253[4], i2253[5] )
  i2252.textureValue = i2253[6]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2255 = data
  i2254.name = i2255[0]
  request.r(i2255[1], i2255[2], 0, i2254, 'texture')
  i2254.aabb = i2255[3]
  i2254.vertices = i2255[4]
  i2254.triangles = i2255[5]
  i2254.textureRect = UnityEngine.Rect.MinMaxRect(i2255[6], i2255[7], i2255[8], i2255[9])
  i2254.packedRect = UnityEngine.Rect.MinMaxRect(i2255[10], i2255[11], i2255[12], i2255[13])
  i2254.border = new pc.Vec4( i2255[14], i2255[15], i2255[16], i2255[17] )
  i2254.transparency = i2255[18]
  i2254.bounds = i2255[19]
  i2254.pixelsPerUnit = i2255[20]
  i2254.textureWidth = i2255[21]
  i2254.textureHeight = i2255[22]
  i2254.nativeSize = new pc.Vec2( i2255[23], i2255[24] )
  i2254.pivot = new pc.Vec2( i2255[25], i2255[26] )
  i2254.textureRectOffset = new pc.Vec2( i2255[27], i2255[28] )
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.wrapMode = i2257[1]
  i2256.isLooping = !!i2257[2]
  i2256.length = i2257[3]
  var i2259 = i2257[4]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2259[i + 0]) );
  }
  i2256.curves = i2258
  var i2261 = i2257[5]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2261[i + 0]) );
  }
  i2256.events = i2260
  i2256.halfPrecision = !!i2257[6]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2265 = data
  i2264.path = i2265[0]
  i2264.componentType = i2265[1]
  i2264.property = i2265[2]
  i2264.keys = i2265[3]
  var i2267 = i2265[4]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2267[i + 0]) );
  }
  i2264.objectReferenceKeys = i2266
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2271 = data
  i2270.time = i2271[0]
  request.r(i2271[1], i2271[2], 0, i2270, 'value')
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2275 = data
  i2274.functionName = i2275[0]
  i2274.floatParameter = i2275[1]
  i2274.intParameter = i2275[2]
  i2274.stringParameter = i2275[3]
  request.r(i2275[4], i2275[5], 0, i2274, 'objectReferenceParameter')
  i2274.time = i2275[6]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2277 = data
  i2276.name = i2277[0]
  i2276.ascent = i2277[1]
  i2276.originalLineHeight = i2277[2]
  i2276.fontSize = i2277[3]
  var i2279 = i2277[4]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2279[i + 0]) );
  }
  i2276.characterInfo = i2278
  request.r(i2277[5], i2277[6], 0, i2276, 'texture')
  i2276.originalFontSize = i2277[7]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2283 = data
  i2282.index = i2283[0]
  i2282.advance = i2283[1]
  i2282.bearing = i2283[2]
  i2282.glyphWidth = i2283[3]
  i2282.glyphHeight = i2283[4]
  i2282.minX = i2283[5]
  i2282.maxX = i2283[6]
  i2282.minY = i2283[7]
  i2282.maxY = i2283[8]
  i2282.uvBottomLeftX = i2283[9]
  i2282.uvBottomLeftY = i2283[10]
  i2282.uvBottomRightX = i2283[11]
  i2282.uvBottomRightY = i2283[12]
  i2282.uvTopLeftX = i2283[13]
  i2282.uvTopLeftY = i2283[14]
  i2282.uvTopRightX = i2283[15]
  i2282.uvTopRightY = i2283[16]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2285 = data
  i2284.name = i2285[0]
  var i2287 = i2285[1]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2287[i + 0]) );
  }
  i2284.states = i2286
  var i2289 = i2285[2]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2289[i + 0]) );
  }
  i2284.layers = i2288
  var i2291 = i2285[3]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2291[i + 0]) );
  }
  i2284.parameters = i2290
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2295 = data
  i2294.cycleOffset = i2295[0]
  i2294.cycleOffsetParameter = i2295[1]
  i2294.cycleOffsetParameterActive = !!i2295[2]
  i2294.mirror = !!i2295[3]
  i2294.mirrorParameter = i2295[4]
  i2294.mirrorParameterActive = !!i2295[5]
  i2294.motionId = i2295[6]
  i2294.nameHash = i2295[7]
  i2294.fullPathHash = i2295[8]
  i2294.speed = i2295[9]
  i2294.speedParameter = i2295[10]
  i2294.speedParameterActive = !!i2295[11]
  i2294.tag = i2295[12]
  i2294.name = i2295[13]
  i2294.writeDefaultValues = !!i2295[14]
  var i2297 = i2295[15]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2297[i + 0]) );
  }
  i2294.transitions = i2296
  var i2299 = i2295[16]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2294.behaviours = i2298
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2303 = data
  i2302.fullPath = i2303[0]
  i2302.canTransitionToSelf = !!i2303[1]
  i2302.duration = i2303[2]
  i2302.exitTime = i2303[3]
  i2302.hasExitTime = !!i2303[4]
  i2302.hasFixedDuration = !!i2303[5]
  i2302.interruptionSource = i2303[6]
  i2302.offset = i2303[7]
  i2302.orderedInterruption = !!i2303[8]
  i2302.destinationStateNameHash = i2303[9]
  i2302.destinationStateMachineId = i2303[10]
  i2302.isExit = !!i2303[11]
  i2302.mute = !!i2303[12]
  i2302.solo = !!i2303[13]
  var i2305 = i2303[14]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2305[i + 0]) );
  }
  i2302.conditions = i2304
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2311 = data
  i2310.blendingMode = i2311[0]
  i2310.defaultWeight = i2311[1]
  i2310.name = i2311[2]
  i2310.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2311[3], i2310.stateMachine)
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2313 = data
  i2312.id = i2313[0]
  i2312.defaultStateNameHash = i2313[1]
  var i2315 = i2313[2]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2315[i + 0]) );
  }
  i2312.entryTransitions = i2314
  var i2317 = i2313[3]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2317[i + 0]) );
  }
  i2312.anyStateTransitions = i2316
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2321 = data
  i2320.destinationStateNameHash = i2321[0]
  i2320.destinationStateMachineId = i2321[1]
  i2320.isExit = !!i2321[2]
  i2320.mute = !!i2321[3]
  i2320.solo = !!i2321[4]
  var i2323 = i2321[5]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2323[i + 0]) );
  }
  i2320.conditions = i2322
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2327 = data
  i2326.defaultBool = !!i2327[0]
  i2326.defaultFloat = i2327[1]
  i2326.defaultInt = i2327[2]
  i2326.name = i2327[3]
  i2326.nameHash = i2327[4]
  i2326.type = i2327[5]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2329 = data
  i2328.name = i2329[0]
  i2328.bytes64 = i2329[1]
  i2328.data = i2329[2]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2331 = data
  var i2333 = i2331[0]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2333[i + 0]) );
  }
  i2330.files = i2332
  i2330.componentToPrefabIds = i2331[1]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2337 = data
  i2336.path = i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'unityObject')
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2341[i + 0]) );
  }
  i2338.scriptsExecutionOrder = i2340
  var i2343 = i2339[1]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2343[i + 0]) );
  }
  i2338.sortingLayers = i2342
  var i2345 = i2339[2]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2345[i + 0]) );
  }
  i2338.cullingLayers = i2344
  i2338.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2339[3], i2338.timeSettings)
  i2338.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2339[4], i2338.physicsSettings)
  i2338.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2339[5], i2338.physics2DSettings)
  i2338.removeShadows = !!i2339[6]
  i2338.autoInstantiatePrefabs = !!i2339[7]
  i2338.enableAutoInstancing = !!i2339[8]
  i2338.lightmapEncodingQuality = i2339[9]
  i2338.desiredColorSpace = i2339[10]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.value = i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2353 = data
  i2352.id = i2353[0]
  i2352.name = i2353[1]
  i2352.value = i2353[2]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2357 = data
  i2356.id = i2357[0]
  i2356.name = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2359 = data
  i2358.fixedDeltaTime = i2359[0]
  i2358.maximumDeltaTime = i2359[1]
  i2358.timeScale = i2359[2]
  i2358.maximumParticleTimestep = i2359[3]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2361 = data
  i2360.gravity = new pc.Vec3( i2361[0], i2361[1], i2361[2] )
  i2360.defaultSolverIterations = i2361[3]
  i2360.autoSyncTransforms = !!i2361[4]
  i2360.autoSimulation = !!i2361[5]
  var i2363 = i2361[6]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2363[i + 0]) );
  }
  i2360.collisionMatrix = i2362
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2367 = data
  i2366.enabled = !!i2367[0]
  i2366.layerId = i2367[1]
  i2366.otherLayerId = i2367[2]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'material')
  i2368.gravity = new pc.Vec2( i2369[2], i2369[3] )
  i2368.positionIterations = i2369[4]
  i2368.velocityIterations = i2369[5]
  i2368.velocityThreshold = i2369[6]
  i2368.maxLinearCorrection = i2369[7]
  i2368.maxAngularCorrection = i2369[8]
  i2368.maxTranslationSpeed = i2369[9]
  i2368.maxRotationSpeed = i2369[10]
  i2368.timeToSleep = i2369[11]
  i2368.linearSleepTolerance = i2369[12]
  i2368.angularSleepTolerance = i2369[13]
  i2368.defaultContactOffset = i2369[14]
  i2368.autoSimulation = !!i2369[15]
  i2368.queriesHitTriggers = !!i2369[16]
  i2368.queriesStartInColliders = !!i2369[17]
  i2368.callbacksOnDisable = !!i2369[18]
  i2368.reuseCollisionCallbacks = !!i2369[19]
  i2368.autoSyncTransforms = !!i2369[20]
  var i2371 = i2369[21]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2371[i + 0]) );
  }
  i2368.collisionMatrix = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.layerId = i2375[1]
  i2374.otherLayerId = i2375[2]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2379 = data
  i2378.weight = i2379[0]
  i2378.vertices = i2379[1]
  i2378.normals = i2379[2]
  i2378.tangents = i2379[3]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2383 = data
  i2382.mode = i2383[0]
  i2382.parameter = i2383[1]
  i2382.threshold = i2383[2]
  return i2382
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[46],"95":[51],"96":[28],"97":[28],"98":[28],"99":[28],"100":[28],"101":[28],"102":[28],"103":[104],"105":[104],"106":[104],"107":[104],"108":[104],"109":[104],"110":[104],"111":[104],"112":[104],"113":[104],"114":[104],"115":[104],"116":[104],"117":[51],"118":[10],"119":[120],"121":[120],"71":[19],"14":[16],"122":[19],"77":[76],"32":[29],"31":[40],"33":[29],"123":[124],"125":[19],"126":[20,19],"73":[71],"22":[20,19],"127":[19],"72":[71],"128":[19],"129":[19],"81":[19],"130":[19],"26":[19],"131":[19],"132":[19],"133":[19],"134":[20,19],"135":[20,19],"136":[19],"137":[19],"138":[19],"78":[19],"25":[20,19],"139":[19],"140":[69],"141":[69],"70":[69],"142":[69],"143":[51],"144":[51],"145":[19],"146":[20,19],"147":[10],"148":[20,19],"149":[20,19],"150":[10,20,19],"151":[19,20],"152":[19]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UIActiveBoost","UnityEngine.UI.Text","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.Rigidbody","CarController","UnityEngine.GameObject","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","HealthBar","TrackContentGenerator","WheatGenerator","GhostReader","LunaUIFields","Products","UnityEngine.TextAsset","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","UnityEngine.UI.Slider","WheatSliderWidget","ShootButtonCtrl","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","RocketsPanelCtrl","ShieldBar","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

