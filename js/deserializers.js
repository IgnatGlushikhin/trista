var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointSpring' )
  var i1795 = data
  i1794.spring = i1795[0]
  i1794.damper = i1795[1]
  i1794.targetPosition = i1795[2]
  return i1794
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointMotor' )
  var i1797 = data
  i1796.m_TargetVelocity = i1797[0]
  i1796.m_Force = i1797[1]
  i1796.m_FreeSpin = i1797[2]
  return i1796
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointLimits' )
  var i1799 = data
  i1798.m_Min = i1799[0]
  i1798.m_Max = i1799[1]
  i1798.m_Bounciness = i1799[2]
  i1798.m_BounceMinVelocity = i1799[3]
  i1798.m_ContactDistance = i1799[4]
  i1798.minBounce = i1799[5]
  i1798.maxBounce = i1799[6]
  return i1798
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointDrive' )
  var i1801 = data
  i1800.m_PositionSpring = i1801[0]
  i1800.m_PositionDamper = i1801[1]
  i1800.m_MaximumForce = i1801[2]
  return i1800
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1803 = data
  i1802.m_Spring = i1803[0]
  i1802.m_Damper = i1803[1]
  return i1802
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1805 = data
  i1804.m_Limit = i1805[0]
  i1804.m_Bounciness = i1805[1]
  i1804.m_ContactDistance = i1805[2]
  return i1804
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1807 = data
  i1806.m_ExtremumSlip = i1807[0]
  i1806.m_ExtremumValue = i1807[1]
  i1806.m_AsymptoteSlip = i1807[2]
  i1806.m_AsymptoteValue = i1807[3]
  i1806.m_Stiffness = i1807[4]
  return i1806
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1809 = data
  i1808.m_LowerAngle = i1809[0]
  i1808.m_UpperAngle = i1809[1]
  return i1808
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1811 = data
  i1810.m_MotorSpeed = i1811[0]
  i1810.m_MaximumMotorTorque = i1811[1]
  return i1810
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1813 = data
  i1812.m_DampingRatio = i1813[0]
  i1812.m_Frequency = i1813[1]
  i1812.m_Angle = i1813[2]
  return i1812
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1815 = data
  i1814.m_LowerTranslation = i1815[0]
  i1814.m_UpperTranslation = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1816 = root || new pc.UnityMaterial()
  var i1817 = data
  i1816.name = i1817[0]
  request.r(i1817[1], i1817[2], 0, i1816, 'shader')
  i1816.renderQueue = i1817[3]
  i1816.enableInstancing = !!i1817[4]
  var i1819 = i1817[5]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1819[i + 0]) );
  }
  i1816.floatParameters = i1818
  var i1821 = i1817[6]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1821[i + 0]) );
  }
  i1816.colorParameters = i1820
  var i1823 = i1817[7]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1823[i + 0]) );
  }
  i1816.vectorParameters = i1822
  var i1825 = i1817[8]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1825[i + 0]) );
  }
  i1816.textureParameters = i1824
  var i1827 = i1817[9]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1827[i + 0]) );
  }
  i1816.materialFlags = i1826
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.value = i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.value = new pc.Color(i1835[1], i1835[2], i1835[3], i1835[4])
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.value = new pc.Vec4( i1839[1], i1839[2], i1839[3], i1839[4] )
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1843 = data
  i1842.name = i1843[0]
  request.r(i1843[1], i1843[2], 0, i1842, 'value')
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.enabled = !!i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1849 = data
  i1848.position = new pc.Vec3( i1849[0], i1849[1], i1849[2] )
  i1848.scale = new pc.Vec3( i1849[3], i1849[4], i1849[5] )
  i1848.rotation = new pc.Quat(i1849[6], i1849[7], i1849[8], i1849[9])
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.isTrigger = !!i1851[1]
  request.r(i1851[2], i1851[3], 0, i1850, 'material')
  i1850.center = new pc.Vec3( i1851[4], i1851[5], i1851[6] )
  i1850.radius = i1851[7]
  return i1850
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnselectedColliderDrawer' )
  var i1853 = data
  return i1852
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i1854 = root || request.c( 'WheatPieceDestroyer' )
  var i1855 = data
  return i1854
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i1856 = root || request.c( 'WheatPieceRandomizer' )
  var i1857 = data
  request.r(i1857[0], i1857[1], 0, i1856, 'partsParent')
  return i1856
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i1858 = root || request.c( 'DisableIfTooFar' )
  var i1859 = data
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'sharedMesh')
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'additionalVertexStreams')
  i1862.enabled = !!i1863[2]
  request.r(i1863[3], i1863[4], 0, i1862, 'sharedMaterial')
  var i1865 = i1863[5]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 2) {
  request.r(i1865[i + 0], i1865[i + 1], 2, i1864, '')
  }
  i1862.sharedMaterials = i1864
  i1862.receiveShadows = !!i1863[6]
  i1862.shadowCastingMode = i1863[7]
  i1862.sortingLayerID = i1863[8]
  i1862.sortingOrder = i1863[9]
  i1862.lightmapIndex = i1863[10]
  i1862.lightmapSceneIndex = i1863[11]
  i1862.lightmapScaleOffset = new pc.Vec4( i1863[12], i1863[13], i1863[14], i1863[15] )
  i1862.lightProbeUsage = i1863[16]
  i1862.reflectionProbeUsage = i1863[17]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1869 = data
  i1868.name = i1869[0]
  i1868.tag = i1869[1]
  i1868.enabled = !!i1869[2]
  i1868.isStatic = !!i1869[3]
  i1868.layer = i1869[4]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.halfPrecision = !!i1871[1]
  i1870.vertexCount = i1871[2]
  i1870.aabb = i1871[3]
  var i1873 = i1871[4]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( !!i1873[i + 0] );
  }
  i1870.streams = i1872
  i1870.vertices = i1871[5]
  var i1875 = i1871[6]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1875[i + 0]) );
  }
  i1870.subMeshes = i1874
  var i1877 = i1871[7]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 16) {
    i1876.push( new pc.Mat4().setData(i1877[i + 0], i1877[i + 1], i1877[i + 2], i1877[i + 3],  i1877[i + 4], i1877[i + 5], i1877[i + 6], i1877[i + 7],  i1877[i + 8], i1877[i + 9], i1877[i + 10], i1877[i + 11],  i1877[i + 12], i1877[i + 13], i1877[i + 14], i1877[i + 15]) );
  }
  i1870.bindposes = i1876
  var i1879 = i1871[8]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1879[i + 0]) );
  }
  i1870.blendShapes = i1878
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1885 = data
  i1884.triangles = i1885[0]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1891 = data
  i1890.name = i1891[0]
  var i1893 = i1891[1]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1893[i + 0]) );
  }
  i1890.frames = i1892
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.width = i1895[1]
  i1894.height = i1895[2]
  i1894.mipmapCount = i1895[3]
  i1894.anisoLevel = i1895[4]
  i1894.filterMode = i1895[5]
  i1894.hdr = !!i1895[6]
  i1894.format = i1895[7]
  i1894.wrapMode = i1895[8]
  i1894.alphaIsTransparency = !!i1895[9]
  i1894.alphaSource = i1895[10]
  return i1894
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i1896 = root || request.c( 'DamagingObstacle' )
  var i1897 = data
  request.r(i1897[0], i1897[1], 0, i1896, 'parts')
  i1896.m_damage = i1897[2]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1899 = data
  i1898.enabled = !!i1899[0]
  request.r(i1899[1], i1899[2], 0, i1898, 'sharedMaterial')
  var i1901 = i1899[3]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 2, i1900, '')
  }
  i1898.sharedMaterials = i1900
  i1898.receiveShadows = !!i1899[4]
  i1898.shadowCastingMode = i1899[5]
  i1898.sortingLayerID = i1899[6]
  i1898.sortingOrder = i1899[7]
  i1898.lightmapIndex = i1899[8]
  i1898.lightmapSceneIndex = i1899[9]
  i1898.lightmapScaleOffset = new pc.Vec4( i1899[10], i1899[11], i1899[12], i1899[13] )
  i1898.lightProbeUsage = i1899[14]
  i1898.reflectionProbeUsage = i1899[15]
  request.r(i1899[16], i1899[17], 0, i1898, 'mesh')
  i1898.meshCount = i1899[18]
  i1898.activeVertexStreamsCount = i1899[19]
  i1898.alignment = i1899[20]
  i1898.renderMode = i1899[21]
  i1898.sortMode = i1899[22]
  i1898.lengthScale = i1899[23]
  i1898.velocityScale = i1899[24]
  i1898.cameraVelocityScale = i1899[25]
  i1898.normalDirection = i1899[26]
  i1898.sortingFudge = i1899[27]
  i1898.minParticleSize = i1899[28]
  i1898.maxParticleSize = i1899[29]
  i1898.pivot = new pc.Vec3( i1899[30], i1899[31], i1899[32] )
  request.r(i1899[33], i1899[34], 0, i1898, 'trailMaterial')
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1903 = data
  i1902.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1903[0], i1902.main)
  i1902.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1903[1], i1902.colorBySpeed)
  i1902.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1903[2], i1902.colorOverLifetime)
  i1902.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1903[3], i1902.emission)
  i1902.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1903[4], i1902.rotationBySpeed)
  i1902.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1903[5], i1902.rotationOverLifetime)
  i1902.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1903[6], i1902.shape)
  i1902.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1903[7], i1902.sizeBySpeed)
  i1902.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1903[8], i1902.sizeOverLifetime)
  i1902.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1903[9], i1902.textureSheetAnimation)
  i1902.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1903[10], i1902.velocityOverLifetime)
  i1902.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1903[11], i1902.noise)
  i1902.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1903[12], i1902.inheritVelocity)
  i1902.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1903[13], i1902.forceOverLifetime)
  i1902.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1903[14], i1902.limitVelocityOverLifetime)
  i1902.useAutoRandomSeed = !!i1903[15]
  i1902.randomSeed = i1903[16]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1904 = root || new pc.ParticleSystemMain()
  var i1905 = data
  i1904.duration = i1905[0]
  i1904.loop = !!i1905[1]
  i1904.prewarm = !!i1905[2]
  i1904.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[3], i1904.startDelay)
  i1904.startDelayMultiplier = i1905[4]
  i1904.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[5], i1904.startLifetime)
  i1904.startLifetimeMultiplier = i1905[6]
  i1904.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[7], i1904.startSpeed)
  i1904.startSpeedMultiplier = i1905[8]
  i1904.startSize3D = !!i1905[9]
  i1904.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[10], i1904.startSize)
  i1904.startSizeMultiplier = i1905[11]
  i1904.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[12], i1904.startSizeX)
  i1904.startSizeXMultiplier = i1905[13]
  i1904.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[14], i1904.startSizeY)
  i1904.startSizeYMultiplier = i1905[15]
  i1904.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[16], i1904.startSizeZ)
  i1904.startSizeZMultiplier = i1905[17]
  i1904.startRotation3D = !!i1905[18]
  i1904.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[19], i1904.startRotation)
  i1904.startRotationMultiplier = i1905[20]
  i1904.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[21], i1904.startRotationX)
  i1904.startRotationXMultiplier = i1905[22]
  i1904.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[23], i1904.startRotationY)
  i1904.startRotationYMultiplier = i1905[24]
  i1904.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[25], i1904.startRotationZ)
  i1904.startRotationZMultiplier = i1905[26]
  i1904.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1905[27], i1904.startColor)
  i1904.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[28], i1904.gravityModifier)
  i1904.gravityModifierMultiplier = i1905[29]
  i1904.simulationSpace = i1905[30]
  request.r(i1905[31], i1905[32], 0, i1904, 'customSimulationSpace')
  i1904.simulationSpeed = i1905[33]
  i1904.useUnscaledTime = !!i1905[34]
  i1904.scalingMode = i1905[35]
  i1904.playOnAwake = !!i1905[36]
  i1904.maxParticles = i1905[37]
  i1904.emitterVelocityMode = i1905[38]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1906 = root || new pc.MinMaxCurve()
  var i1907 = data
  i1906.m_Mode = i1907[0]
  i1906.m_CurveMin = new pc.AnimationCurve( { keys_flow: i1907[1] } )
  i1906.m_CurveMax = new pc.AnimationCurve( { keys_flow: i1907[2] } )
  i1906.m_CurveMultiplier = i1907[3]
  i1906.m_ConstantMin = i1907[4]
  i1906.m_ConstantMax = i1907[5]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1908 = root || new pc.MinMaxGradient()
  var i1909 = data
  i1908.m_Mode = i1909[0]
  i1908.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1909[1], i1908.m_GradientMin)
  i1908.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1909[2], i1908.m_GradientMax)
  i1908.m_ColorMin = new pc.Color(i1909[3], i1909[4], i1909[5], i1909[6])
  i1908.m_ColorMax = new pc.Color(i1909[7], i1909[8], i1909[9], i1909[10])
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1911 = data
  i1910.mode = i1911[0]
  var i1913 = i1911[1]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1913[i + 0]) );
  }
  i1910.colorKeys = i1912
  var i1915 = i1911[2]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1915[i + 0]) );
  }
  i1910.alphaKeys = i1914
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1916 = root || new pc.ParticleSystemColorBySpeed()
  var i1917 = data
  i1916.enabled = !!i1917[0]
  i1916.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1917[1], i1916.color)
  i1916.range = new pc.Vec2( i1917[2], i1917[3] )
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1921 = data
  i1920.color = new pc.Color(i1921[0], i1921[1], i1921[2], i1921[3])
  i1920.time = i1921[4]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1925 = data
  i1924.alpha = i1925[0]
  i1924.time = i1925[1]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1926 = root || new pc.ParticleSystemColorOverLifetime()
  var i1927 = data
  i1926.enabled = !!i1927[0]
  i1926.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1927[1], i1926.color)
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1928 = root || new pc.ParticleSystemEmitter()
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[1], i1928.rateOverTime)
  i1928.rateOverTimeMultiplier = i1929[2]
  i1928.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1929[3], i1928.rateOverDistance)
  i1928.rateOverDistanceMultiplier = i1929[4]
  var i1931 = i1929[5]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1931[i + 0]) );
  }
  i1928.bursts = i1930
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemBurst()
  var i1935 = data
  i1934.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[0], i1934.count)
  i1934.cycleCount = i1935[1]
  i1934.minCount = i1935[2]
  i1934.maxCount = i1935[3]
  i1934.repeatInterval = i1935[4]
  i1934.time = i1935[5]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemRotationBySpeed()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[1], i1936.x)
  i1936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[2], i1936.y)
  i1936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[3], i1936.z)
  i1936.xMultiplier = i1937[4]
  i1936.yMultiplier = i1937[5]
  i1936.zMultiplier = i1937[6]
  i1936.separateAxes = !!i1937[7]
  i1936.range = new pc.Vec2( i1937[8], i1937[9] )
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[1], i1938.x)
  i1938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[2], i1938.y)
  i1938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[3], i1938.z)
  i1938.xMultiplier = i1939[4]
  i1938.yMultiplier = i1939[5]
  i1938.zMultiplier = i1939[6]
  i1938.separateAxes = !!i1939[7]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemShape()
  var i1941 = data
  i1940.enabled = !!i1941[0]
  i1940.shapeType = i1941[1]
  i1940.randomDirectionAmount = i1941[2]
  i1940.sphericalDirectionAmount = i1941[3]
  i1940.randomPositionAmount = i1941[4]
  i1940.alignToDirection = !!i1941[5]
  i1940.radius = i1941[6]
  i1940.radiusMode = i1941[7]
  i1940.radiusSpread = i1941[8]
  i1940.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[9], i1940.radiusSpeed)
  i1940.radiusSpeedMultiplier = i1941[10]
  i1940.radiusThickness = i1941[11]
  i1940.angle = i1941[12]
  i1940.length = i1941[13]
  i1940.boxThickness = new pc.Vec3( i1941[14], i1941[15], i1941[16] )
  i1940.meshShapeType = i1941[17]
  request.r(i1941[18], i1941[19], 0, i1940, 'mesh')
  request.r(i1941[20], i1941[21], 0, i1940, 'meshRenderer')
  request.r(i1941[22], i1941[23], 0, i1940, 'skinnedMeshRenderer')
  i1940.useMeshMaterialIndex = !!i1941[24]
  i1940.meshMaterialIndex = i1941[25]
  i1940.useMeshColors = !!i1941[26]
  i1940.normalOffset = i1941[27]
  i1940.arc = i1941[28]
  i1940.arcMode = i1941[29]
  i1940.arcSpread = i1941[30]
  i1940.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[31], i1940.arcSpeed)
  i1940.arcSpeedMultiplier = i1941[32]
  i1940.donutRadius = i1941[33]
  i1940.position = new pc.Vec3( i1941[34], i1941[35], i1941[36] )
  i1940.rotation = new pc.Vec3( i1941[37], i1941[38], i1941[39] )
  i1940.scale = new pc.Vec3( i1941[40], i1941[41], i1941[42] )
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemSizeBySpeed()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[1], i1942.size)
  i1942.sizeMultiplier = i1943[2]
  i1942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[3], i1942.x)
  i1942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[4], i1942.y)
  i1942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[5], i1942.z)
  i1942.xMultiplier = i1943[6]
  i1942.yMultiplier = i1943[7]
  i1942.zMultiplier = i1943[8]
  i1942.separateAxes = !!i1943[9]
  i1942.range = new pc.Vec2( i1943[10], i1943[11] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[1], i1944.size)
  i1944.sizeMultiplier = i1945[2]
  i1944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[3], i1944.x)
  i1944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[4], i1944.y)
  i1944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[5], i1944.z)
  i1944.xMultiplier = i1945[6]
  i1944.yMultiplier = i1945[7]
  i1944.zMultiplier = i1945[8]
  i1944.separateAxes = !!i1945[9]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1946 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.mode = i1947[1]
  i1946.animation = i1947[2]
  i1946.numTilesX = i1947[3]
  i1946.numTilesY = i1947[4]
  i1946.useRandomRow = !!i1947[5]
  i1946.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[6], i1946.frameOverTime)
  i1946.frameOverTimeMultiplier = i1947[7]
  i1946.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[8], i1946.startFrame)
  i1946.startFrameMultiplier = i1947[9]
  i1946.cycleCount = i1947[10]
  i1946.rowIndex = i1947[11]
  i1946.flipU = i1947[12]
  i1946.flipV = i1947[13]
  i1946.spriteCount = i1947[14]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[1], i1948.x)
  i1948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.y)
  i1948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[3], i1948.z)
  i1948.xMultiplier = i1949[4]
  i1948.yMultiplier = i1949[5]
  i1948.zMultiplier = i1949[6]
  i1948.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[7], i1948.speedModifier)
  i1948.speedModifierMultiplier = i1949[8]
  i1948.space = i1949[9]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemNoise()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.separateAxes = !!i1951[1]
  i1950.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.strengthX)
  i1950.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.strengthY)
  i1950.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[4], i1950.strengthZ)
  i1950.strengthXMultiplier = i1951[5]
  i1950.strengthYMultiplier = i1951[6]
  i1950.strengthZMultiplier = i1951[7]
  i1950.frequency = i1951[8]
  i1950.damping = !!i1951[9]
  i1950.octaveCount = i1951[10]
  i1950.octaveMultiplier = i1951[11]
  i1950.octaveScale = i1951[12]
  i1950.quality = i1951[13]
  i1950.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[14], i1950.scrollSpeed)
  i1950.scrollSpeedMultiplier = i1951[15]
  i1950.remapEnabled = !!i1951[16]
  i1950.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[17], i1950.remapX)
  i1950.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[18], i1950.remapY)
  i1950.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[19], i1950.remapZ)
  i1950.remapXMultiplier = i1951[20]
  i1950.remapYMultiplier = i1951[21]
  i1950.remapZMultiplier = i1951[22]
  i1950.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[23], i1950.positionAmount)
  i1950.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[24], i1950.rotationAmount)
  i1950.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[25], i1950.sizeAmount)
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemInheritVelocity()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.mode = i1953[1]
  i1952.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.curve)
  i1952.curveMultiplier = i1953[3]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemForceOverLifetime()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[1], i1954.x)
  i1954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[2], i1954.y)
  i1954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[3], i1954.z)
  i1954.xMultiplier = i1955[4]
  i1954.yMultiplier = i1955[5]
  i1954.zMultiplier = i1955[6]
  i1954.space = i1955[7]
  i1954.randomized = !!i1955[8]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[1], i1956.limit)
  i1956.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.limitX)
  i1956.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.limitY)
  i1956.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[4], i1956.limitZ)
  i1956.limitMultiplier = i1957[5]
  i1956.limitXMultiplier = i1957[6]
  i1956.limitYMultiplier = i1957[7]
  i1956.limitZMultiplier = i1957[8]
  i1956.dampen = i1957[9]
  i1956.separateAxes = !!i1957[10]
  i1956.space = i1957[11]
  i1956.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[12], i1956.drag)
  i1956.dragMultiplier = i1957[13]
  i1956.multiplyDragByParticleSize = !!i1957[14]
  i1956.multiplyDragByParticleVelocity = !!i1957[15]
  return i1956
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i1958 = root || request.c( 'LootableItem' )
  var i1959 = data
  i1958.OnLootableItemCollected = request.d('LootableItemEvent', i1959[0], i1958.OnLootableItemCollected)
  request.r(i1959[1], i1959[2], 0, i1958, 'item')
  i1958.kind = i1959[3]
  return i1958
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i1960 = root || request.c( 'LootableItemEvent' )
  var i1961 = data
  i1960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1961[0], i1960.m_PersistentCalls)
  return i1960
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1963 = data
  var i1965 = i1963[0]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.add(request.d('UnityEngine.Events.PersistentCall', i1965[i + 0]));
  }
  i1962.m_Calls = i1964
  return i1962
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'm_Target')
  i1968.m_MethodName = i1969[2]
  i1968.m_Mode = i1969[3]
  i1968.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1969[4], i1968.m_Arguments)
  i1968.m_CallState = i1969[5]
  return i1968
}

Deserializers["LightPole"] = function (request, data, root) {
  var i1970 = root || request.c( 'LightPole' )
  var i1971 = data
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1973 = data
  i1972.pivot = new pc.Vec2( i1973[0], i1973[1] )
  i1972.anchorMin = new pc.Vec2( i1973[2], i1973[3] )
  i1972.anchorMax = new pc.Vec2( i1973[4], i1973[5] )
  i1972.sizeDelta = new pc.Vec2( i1973[6], i1973[7] )
  i1972.anchoredPosition3D = new pc.Vec3( i1973[8], i1973[9], i1973[10] )
  i1972.rotation = new pc.Quat(i1973[11], i1973[12], i1973[13], i1973[14])
  i1972.scale = new pc.Vec3( i1973[15], i1973[16], i1973[17] )
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1975 = data
  i1974.cullTransparentMesh = !!i1975[0]
  return i1974
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.Image' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'm_Sprite')
  i1976.m_Type = i1977[2]
  i1976.m_PreserveAspect = !!i1977[3]
  i1976.m_FillCenter = !!i1977[4]
  i1976.m_FillMethod = i1977[5]
  i1976.m_FillAmount = i1977[6]
  i1976.m_FillClockwise = !!i1977[7]
  i1976.m_FillOrigin = i1977[8]
  i1976.m_UseSpriteMesh = !!i1977[9]
  i1976.m_PixelsPerUnitMultiplier = i1977[10]
  request.r(i1977[11], i1977[12], 0, i1976, 'm_Material')
  i1976.m_Maskable = !!i1977[13]
  i1976.m_Color = new pc.Color(i1977[14], i1977[15], i1977[16], i1977[17])
  i1976.m_RaycastTarget = !!i1977[18]
  return i1976
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i1978 = root || request.c( 'UIActiveBoost' )
  var i1979 = data
  i1978.TimeLeft = i1979[0]
  request.r(i1979[1], i1979[2], 0, i1978, 'imgIcon')
  request.r(i1979[3], i1979[4], 0, i1978, 'txtTimer')
  var i1981 = i1979[5]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('UIActiveBoost+SpriteByKind', i1981[i + 0]) );
  }
  i1978.sprites = i1980
  i1978.Kind = i1979[6]
  return i1978
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i1984 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i1985 = data
  i1984.Kind = i1985[0]
  request.r(i1985[1], i1985[2], 0, i1984, 'Sprite')
  return i1984
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1987 = data
  i1986.m_IgnoreLayout = !!i1987[0]
  i1986.m_MinWidth = i1987[1]
  i1986.m_MinHeight = i1987[2]
  i1986.m_PreferredWidth = i1987[3]
  i1986.m_PreferredHeight = i1987[4]
  i1986.m_FlexibleWidth = i1987[5]
  i1986.m_FlexibleHeight = i1987[6]
  i1986.m_LayoutPriority = i1987[7]
  return i1986
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.UI.Text' )
  var i1989 = data
  i1988.m_FontData = request.d('UnityEngine.UI.FontData', i1989[0], i1988.m_FontData)
  i1988.m_Text = i1989[1]
  request.r(i1989[2], i1989[3], 0, i1988, 'm_Material')
  i1988.m_Maskable = !!i1989[4]
  i1988.m_Color = new pc.Color(i1989[5], i1989[6], i1989[7], i1989[8])
  i1988.m_RaycastTarget = !!i1989[9]
  return i1988
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'm_Font')
  i1990.m_FontSize = i1991[2]
  i1990.m_FontStyle = i1991[3]
  i1990.m_BestFit = !!i1991[4]
  i1990.m_MinSize = i1991[5]
  i1990.m_MaxSize = i1991[6]
  i1990.m_Alignment = i1991[7]
  i1990.m_AlignByGeometry = !!i1991[8]
  i1990.m_RichText = !!i1991[9]
  i1990.m_HorizontalOverflow = i1991[10]
  i1990.m_VerticalOverflow = i1991[11]
  i1990.m_LineSpacing = i1991[12]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1993 = data
  i1992.mass = i1993[0]
  i1992.drag = i1993[1]
  i1992.angularDrag = i1993[2]
  i1992.useGravity = !!i1993[3]
  i1992.isKinematic = !!i1993[4]
  i1992.constraints = i1993[5]
  i1992.maxAngularVelocity = i1993[6]
  i1992.collisionDetectionMode = i1993[7]
  i1992.interpolation = i1993[8]
  return i1992
}

Deserializers["CarController"] = function (request, data, root) {
  var i1994 = root || request.c( 'CarController' )
  var i1995 = data
  var i1997 = i1995[0]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 2, i1996, '')
  }
  i1994.m_WheelColliders = i1996
  i1994.TorqueMultiplier = i1995[1]
  i1994.m_CarDriveType = i1995[2]
  var i1999 = i1995[3]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 2, i1998, '')
  }
  i1994.m_WheelMeshes = i1998
  var i2001 = i1995[4]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1994.m_WheelEffects = i2000
  i1994.m_CentreOfMassOffset = new pc.Vec3( i1995[5], i1995[6], i1995[7] )
  i1994.m_MaximumSteerAngle = i1995[8]
  i1994.m_SteerHelper = i1995[9]
  i1994.m_TractionControl = i1995[10]
  i1994.m_FullTorqueOverAllWheels = i1995[11]
  i1994.m_ReverseTorque = i1995[12]
  i1994.m_MaxHandbrakeTorque = i1995[13]
  i1994.m_Downforce = i1995[14]
  i1994.m_SpeedType = i1995[15]
  i1994.m_Topspeed = i1995[16]
  i1994.m_RevRangeBoundary = i1995[17]
  i1994.m_SlipLimit = i1995[18]
  i1994.m_BrakeTorque = i1995[19]
  i1994.m_GearNum = i1995[20]
  request.r(i1995[21], i1995[22], 0, i1994, 'm_Rigidbody')
  return i1994
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i2008 = root || request.c( 'CarUserControl' )
  var i2009 = data
  i2008.CanMove = !!i2009[0]
  request.r(i2009[1], i2009[2], 0, i2008, 'pathCreator')
  request.r(i2009[3], i2009[4], 0, i2008, 'playerCarrot')
  request.r(i2009[5], i2009[6], 0, i2008, 'farPointInDirectionOfView')
  request.r(i2009[7], i2009[8], 0, i2008, 'ghostWriter')
  request.r(i2009[9], i2009[10], 0, i2008, 'carBody')
  request.r(i2009[11], i2009[12], 0, i2008, 'collisionParticlesLeft')
  request.r(i2009[13], i2009[14], 0, i2008, 'collisionParticlesRight')
  return i2008
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i2011 = data
  i2010.engineSoundStyle = i2011[0]
  request.r(i2011[1], i2011[2], 0, i2010, 'lowAccelClip')
  request.r(i2011[3], i2011[4], 0, i2010, 'lowDecelClip')
  request.r(i2011[5], i2011[6], 0, i2010, 'highAccelClip')
  request.r(i2011[7], i2011[8], 0, i2010, 'highDecelClip')
  i2010.pitchMultiplier = i2011[9]
  i2010.lowPitchMin = i2011[10]
  i2010.lowPitchMax = i2011[11]
  i2010.highPitchMultiplier = i2011[12]
  i2010.maxRolloffDistance = i2011[13]
  i2010.dopplerLevel = i2011[14]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2013 = data
  i2012.center = new pc.Vec3( i2013[0], i2013[1], i2013[2] )
  i2012.size = new pc.Vec3( i2013[3], i2013[4], i2013[5] )
  i2012.enabled = !!i2013[6]
  i2012.isTrigger = !!i2013[7]
  request.r(i2013[8], i2013[9], 0, i2012, 'material')
  return i2012
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i2014 = root || request.c( 'RaceCar' )
  var i2015 = data
  i2014.Owner = i2015[0]
  i2014.Score = i2015[1]
  request.r(i2015[2], i2015[3], 0, i2014, 'boosts')
  request.r(i2015[4], i2015[5], 0, i2014, 'products')
  request.r(i2015[6], i2015[7], 0, i2014, 'boostsEffectPosition')
  request.r(i2015[8], i2015[9], 0, i2014, 'effectSheildPrefab')
  request.r(i2015[10], i2015[11], 0, i2014, 'effectDoublePrefab')
  return i2014
}

Deserializers["HealthController"] = function (request, data, root) {
  var i2016 = root || request.c( 'HealthController' )
  var i2017 = data
  i2016.Health = i2017[0]
  i2016.MaxHealth = i2017[1]
  i2016.Shield = i2017[2]
  i2016.MaxShield = i2017[3]
  request.r(i2017[4], i2017[5], 0, i2016, 'MainScreen')
  request.r(i2017[6], i2017[7], 0, i2016, 'LossScreen')
  request.r(i2017[8], i2017[9], 0, i2016, 'boosts')
  return i2016
}

Deserializers["Gun"] = function (request, data, root) {
  var i2018 = root || request.c( 'Gun' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'rocketPrefab')
  request.r(i2019[2], i2019[3], 0, i2018, 'carUserControl')
  request.r(i2019[4], i2019[5], 0, i2018, 'products')
  return i2018
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i2020 = root || request.c( 'JustWheelMeshes' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 2, i2022, '')
  }
  i2020.m_WheelMeshes = i2022
  return i2020
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i2024 = root || request.c( 'BlobShadowMovement' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'Target')
  i2024.Offset = new pc.Vec3( i2025[2], i2025[3], i2025[4] )
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'clip')
  i2026.playOnAwake = !!i2027[2]
  i2026.loop = !!i2027[3]
  i2026.enabled = !!i2027[4]
  return i2026
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i2028 = root || request.c( 'WheelEffects' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'SkidTrailPrefab')
  request.r(i2029[2], i2029[3], 0, i2028, 'skidParticles')
  return i2028
}

Deserializers["Rocket"] = function (request, data, root) {
  var i2030 = root || request.c( 'Rocket' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'jetStream')
  request.r(i2031[2], i2031[3], 0, i2030, 'explosionPrefab')
  return i2030
}

Deserializers["Explosion"] = function (request, data, root) {
  var i2032 = root || request.c( 'Explosion' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'explosionParticleSystem')
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'animatorController')
  i2034.updateMode = i2035[2]
  var i2037 = i2035[3]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 2) {
  request.r(i2037[i + 0], i2037[i + 1], 2, i2036, '')
  }
  i2034.humanBones = i2036
  i2034.enabled = !!i2035[4]
  return i2034
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i2040 = root || request.c( 'DriverDescription' )
  var i2041 = data
  var i2043 = i2041[0]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 2, i2042, '')
  }
  i2040.driverPrefab = i2042
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2045 = data
  i2044.enabled = !!i2045[0]
  request.r(i2045[1], i2045[2], 0, i2044, 'sharedMaterial')
  var i2047 = i2045[3]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 2, i2046, '')
  }
  i2044.sharedMaterials = i2046
  i2044.receiveShadows = !!i2045[4]
  i2044.shadowCastingMode = i2045[5]
  i2044.sortingLayerID = i2045[6]
  i2044.sortingOrder = i2045[7]
  i2044.lightmapIndex = i2045[8]
  i2044.lightmapSceneIndex = i2045[9]
  i2044.lightmapScaleOffset = new pc.Vec4( i2045[10], i2045[11], i2045[12], i2045[13] )
  i2044.lightProbeUsage = i2045[14]
  i2044.reflectionProbeUsage = i2045[15]
  request.r(i2045[16], i2045[17], 0, i2044, 'sharedMesh')
  var i2049 = i2045[18]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 2, i2048, '')
  }
  i2044.bones = i2048
  i2044.updateWhenOffscreen = !!i2045[19]
  i2044.localBounds = i2045[20]
  request.r(i2045[21], i2045[22], 0, i2044, 'rootBone')
  var i2051 = i2045[23]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2051[i + 0]) );
  }
  i2044.blendShapesWeights = i2050
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2055 = data
  i2054.weight = i2055[0]
  return i2054
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i2056 = root || request.c( 'TrackHandles' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'MainPath')
  i2056.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i2057[2], i2056.OnFinishReached)
  request.r(i2057[3], i2057[4], 0, i2056, 'Root')
  return i2056
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2059 = data
  i2058.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2059[0], i2058.m_PersistentCalls)
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.isTrigger = !!i2061[1]
  request.r(i2061[2], i2061[3], 0, i2060, 'material')
  request.r(i2061[4], i2061[5], 0, i2060, 'sharedMesh')
  i2060.convex = !!i2061[6]
  return i2060
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i2062 = root || request.c( 'FinishTrigger' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'trackHandles')
  return i2062
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i2064 = root || request.c( 'PathCreation.PathCreator' )
  var i2065 = data
  i2064.editorData = request.d('PathCreation.PathCreatorData', i2065[0], i2064.editorData)
  i2064.initialized = !!i2065[1]
  return i2064
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i2066 = root || request.c( 'PathCreation.PathCreatorData' )
  var i2067 = data
  i2066.vertexPathMaxAngleError = i2067[0]
  i2066.vertexPathMinVertexSpacing = i2067[1]
  i2066.showTransformTool = !!i2067[2]
  i2066.showPathBounds = !!i2067[3]
  i2066.showPerSegmentBounds = !!i2067[4]
  i2066.displayAnchorPoints = !!i2067[5]
  i2066.displayControlPoints = !!i2067[6]
  i2066.bezierHandleScale = i2067[7]
  i2066.globalDisplaySettingsFoldout = !!i2067[8]
  i2066.keepConstantHandleSize = !!i2067[9]
  i2066.showNormalsInVertexMode = !!i2067[10]
  i2066.showBezierPathInVertexMode = !!i2067[11]
  i2066.showDisplayOptions = !!i2067[12]
  i2066.showPathOptions = !!i2067[13]
  i2066.showVertexPathDisplayOptions = !!i2067[14]
  i2066.showVertexPathOptions = !!i2067[15]
  i2066.showNormals = !!i2067[16]
  i2066.showNormalsHelpInfo = !!i2067[17]
  i2066.tabIndex = i2067[18]
  i2066._bezierPath = request.d('PathCreation.BezierPath', i2067[19], i2066._bezierPath)
  i2066.vertexPathUpToDate = !!i2067[20]
  return i2066
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i2068 = root || request.c( 'PathCreation.BezierPath' )
  var i2069 = data
  var i2071 = i2069[0]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2071.length; i += 3) {
    i2070.add(new pc.Vec3( i2071[i + 0], i2071[i + 1], i2071[i + 2] ));
  }
  i2068.points = i2070
  i2068.isClosed = !!i2069[1]
  i2068.space = i2069[2]
  i2068.controlMode = i2069[3]
  i2068.autoControlLength = i2069[4]
  i2068.boundsUpToDate = !!i2069[5]
  var i2073 = i2069[6]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(i2073[i + 0]);
  }
  i2068.perAnchorNormalsAngle = i2072
  i2068.globalNormalsAngle = i2069[7]
  i2068.flipNormals = !!i2069[8]
  return i2068
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2078 = root || request.c( 'GameManager' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'MainCamera')
  i2078.LandscapeFov = i2079[2]
  i2078.PortraitFov = i2079[3]
  i2078.WheatCullDistance = i2079[4]
  request.r(i2079[5], i2079[6], 0, i2078, 'CountdownWidget')
  request.r(i2079[7], i2079[8], 0, i2078, 'TutorialWindow')
  request.r(i2079[9], i2079[10], 0, i2078, 'MainBackroundImage')
  request.r(i2079[11], i2079[12], 0, i2078, 'WinScreen')
  request.r(i2079[13], i2079[14], 0, i2078, 'LoseScreen')
  request.r(i2079[15], i2079[16], 0, i2078, 'MainScreen')
  request.r(i2079[17], i2079[18], 0, i2078, 'btnLeft')
  request.r(i2079[19], i2079[20], 0, i2078, 'btnRight')
  request.r(i2079[21], i2079[22], 0, i2078, 'healthBar')
  var i2081 = i2079[23]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2078.Opponents = i2080
  request.r(i2079[24], i2079[25], 0, i2078, 'PlayerCar')
  request.r(i2079[26], i2079[27], 0, i2078, 'CarUserControl')
  i2078.Position = i2079[28]
  request.r(i2079[29], i2079[30], 0, i2078, 'LastCheckpoint')
  request.r(i2079[31], i2079[32], 0, i2078, 'healthController')
  var i2083 = i2079[33]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 2, i2082, '')
  }
  i2078.tracktors = i2082
  var i2085 = i2079[34]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 2) {
  request.r(i2085[i + 0], i2085[i + 1], 2, i2084, '')
  }
  i2078.drivers = i2084
  var i2087 = i2079[35]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2078.trackPrefabs = i2086
  request.r(i2079[36], i2079[37], 0, i2078, 'trackParent')
  i2078._WheatCullDistance = i2079[38]
  request.r(i2079[39], i2079[40], 0, i2078, 'trackContentGenerator')
  request.r(i2079[41], i2079[42], 0, i2078, 'wheatGenerator')
  request.r(i2079[43], i2079[44], 0, i2078, 'ghostReader')
  return i2078
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i2092 = root || request.c( 'LunaUIFields' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'ObjectiveHintText')
  i2092.ObjectiveHintString = i2093[2]
  request.r(i2093[3], i2093[4], 0, i2092, 'LevelFailedButtonText')
  i2092.LevelFailedButtonString = i2093[5]
  request.r(i2093[6], i2093[7], 0, i2092, 'LevelCompleteButtonText')
  i2092.LevelCompleteButtonString = i2093[8]
  return i2092
}

Deserializers["Localization"] = function (request, data, root) {
  var i2094 = root || request.c( 'Localization' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'englishAsset')
  request.r(i2095[2], i2095[3], 0, i2094, 'russianAsset')
  return i2094
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i2096 = root || request.c( 'WheatGenerator' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'wheatPiece')
  request.r(i2097[2], i2097[3], 0, i2096, 'trackContentGenerator')
  request.r(i2097[4], i2097[5], 0, i2096, 'carUserControl')
  return i2096
}

Deserializers["Products"] = function (request, data, root) {
  var i2098 = root || request.c( 'Products' )
  var i2099 = data
  i2098.OnProductsNumberChanged = request.d('ProductsEvent', i2099[0], i2098.OnProductsNumberChanged)
  return i2098
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i2100 = root || request.c( 'ProductsEvent' )
  var i2101 = data
  i2100.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2101[0], i2100.m_PersistentCalls)
  return i2100
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i2102 = root || request.c( 'TrackContentGenerator' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'healthController')
  var i2105 = i2103[2]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 1, i2104, '')
  }
  i2102.AlreadyGenerated = i2104
  request.r(i2103[3], i2103[4], 0, i2102, 'parentForPlacing')
  var i2107 = i2103[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 2) {
  request.r(i2107[i + 0], i2107[i + 1], 2, i2106, '')
  }
  i2102.obstaclesPrefabs = i2106
  var i2109 = i2103[6]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2102.hardObstaclesPrefabs = i2108
  var i2111 = i2103[7]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 2) {
  request.r(i2111[i + 0], i2111[i + 1], 2, i2110, '')
  }
  i2102.bonusesPrefabs = i2110
  request.r(i2103[8], i2103[9], 0, i2102, 'configFile')
  request.r(i2103[10], i2103[11], 0, i2102, 'products')
  request.r(i2103[12], i2103[13], 0, i2102, 'boosts')
  return i2102
}

Deserializers["Boosts"] = function (request, data, root) {
  var i2114 = root || request.c( 'Boosts' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('Boosts+DataItem', i2117[i + 0]));
  }
  i2114.Data = i2116
  return i2114
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i2120 = root || request.c( 'Boosts+DataItem' )
  var i2121 = data
  i2120.Kind = i2121[0]
  i2120.TimeLeft = i2121[1]
  return i2120
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i2122 = root || request.c( 'GhostWriter' )
  var i2123 = data
  i2122.timer = i2123[0]
  var i2125 = i2123[1]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(request.d('GhostWriter+Entry', i2125[i + 0]));
  }
  i2122.data = i2124
  request.r(i2123[2], i2123[3], 0, i2122, 'carUserControl')
  return i2122
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i2128 = root || request.c( 'GhostWriter+Entry' )
  var i2129 = data
  i2128.kind = i2129[0]
  i2128.time = i2129[1]
  i2128.distance = i2129[2]
  i2128.sideOffset = i2129[3]
  i2128.speed = i2129[4]
  return i2128
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i2130 = root || request.c( 'GhostReader' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'ghost')
  request.r(i2131[2], i2131[3], 0, i2130, 'pathCreator')
  i2130.timer = i2131[4]
  var i2133 = i2131[5]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('GhostReader+Entry', i2133[i + 0]));
  }
  i2130.data = i2132
  return i2130
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i2136 = root || request.c( 'GhostReader+Entry' )
  var i2137 = data
  i2136.kind = i2137[0]
  i2136.time = i2137[1]
  i2136.distance = i2137[2]
  i2136.sideOffset = i2137[3]
  i2136.speed = i2137[4]
  return i2136
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i2139 = data
  i2138.m_MoveSpeed = i2139[0]
  i2138.m_TurnSpeed = i2139[1]
  i2138.m_RollSpeed = i2139[2]
  i2138.m_FollowVelocity = !!i2139[3]
  i2138.m_FollowTilt = !!i2139[4]
  i2138.m_SpinTurnLimit = i2139[5]
  i2138.m_TargetVelocityLowerLimit = i2139[6]
  i2138.m_SmoothTurnTime = i2139[7]
  request.r(i2139[8], i2139[9], 0, i2138, 'm_Target')
  i2138.m_AutoTargetPlayer = !!i2139[10]
  i2138.m_UpdateType = i2139[11]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2141 = data
  i2140.enabled = !!i2141[0]
  i2140.aspect = i2141[1]
  i2140.orthographic = !!i2141[2]
  i2140.orthographicSize = i2141[3]
  i2140.backgroundColor = new pc.Color(i2141[4], i2141[5], i2141[6], i2141[7])
  i2140.nearClipPlane = i2141[8]
  i2140.farClipPlane = i2141[9]
  i2140.fieldOfView = i2141[10]
  i2140.depth = i2141[11]
  i2140.clearFlags = i2141[12]
  i2140.cullingMask = i2141[13]
  i2140.rect = i2141[14]
  request.r(i2141[15], i2141[16], 0, i2140, 'targetTexture')
  return i2140
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i2142 = root || request.c( 'CameraFollower' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'Target')
  i2142.PositionOffset = new pc.Vec3( i2143[2], i2143[3], i2143[4] )
  i2142.RotationOffset = new pc.Vec3( i2143[5], i2143[6], i2143[7] )
  i2142.CameraSpeed = i2143[8]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2145 = data
  i2144.enabled = !!i2145[0]
  i2144.type = i2145[1]
  i2144.color = new pc.Color(i2145[2], i2145[3], i2145[4], i2145[5])
  i2144.cullingMask = i2145[6]
  i2144.intensity = i2145[7]
  i2144.range = i2145[8]
  i2144.spotAngle = i2145[9]
  i2144.shadows = i2145[10]
  i2144.shadowNormalBias = i2145[11]
  i2144.shadowBias = i2145[12]
  i2144.shadowStrength = i2145[13]
  i2144.lightmapBakeType = i2145[14]
  i2144.renderMode = i2145[15]
  request.r(i2145[16], i2145[17], 0, i2144, 'cookie')
  i2144.cookieSize = i2145[18]
  return i2144
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'm_FirstSelected')
  i2146.m_sendNavigationEvents = !!i2147[2]
  i2146.m_DragThreshold = i2147[3]
  return i2146
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2149 = data
  i2148.m_HorizontalAxis = i2149[0]
  i2148.m_VerticalAxis = i2149[1]
  i2148.m_SubmitButton = i2149[2]
  i2148.m_CancelButton = i2149[3]
  i2148.m_InputActionsPerSecond = i2149[4]
  i2148.m_RepeatDelay = i2149[5]
  i2148.m_ForceModuleActive = !!i2149[6]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2151 = data
  i2150.enabled = !!i2151[0]
  i2150.planeDistance = i2151[1]
  i2150.referencePixelsPerUnit = i2151[2]
  i2150.isFallbackOverlay = !!i2151[3]
  i2150.renderMode = i2151[4]
  i2150.renderOrder = i2151[5]
  i2150.sortingLayerName = i2151[6]
  i2150.sortingOrder = i2151[7]
  i2150.scaleFactor = i2151[8]
  request.r(i2151[9], i2151[10], 0, i2150, 'worldCamera')
  i2150.overrideSorting = !!i2151[11]
  i2150.pixelPerfect = !!i2151[12]
  i2150.targetDisplay = i2151[13]
  i2150.overridePixelPerfect = !!i2151[14]
  return i2150
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2153 = data
  i2152.m_UiScaleMode = i2153[0]
  i2152.m_ReferencePixelsPerUnit = i2153[1]
  i2152.m_ScaleFactor = i2153[2]
  i2152.m_ReferenceResolution = new pc.Vec2( i2153[3], i2153[4] )
  i2152.m_ScreenMatchMode = i2153[5]
  i2152.m_MatchWidthOrHeight = i2153[6]
  i2152.m_PhysicalUnit = i2153[7]
  i2152.m_FallbackScreenDPI = i2153[8]
  i2152.m_DefaultSpriteDPI = i2153[9]
  i2152.m_DynamicPixelsPerUnit = i2153[10]
  return i2152
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2155 = data
  i2154.m_IgnoreReversedGraphics = !!i2155[0]
  i2154.m_BlockingObjects = i2155[1]
  i2154.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2155[2] )
  return i2154
}

Deserializers["Countdown"] = function (request, data, root) {
  var i2156 = root || request.c( 'Countdown' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'CountdownText')
  request.r(i2157[2], i2157[3], 0, i2156, 'Go_Image')
  request.r(i2157[4], i2157[5], 0, i2156, 'Outline')
  request.r(i2157[6], i2157[7], 0, i2156, 'MainWindow')
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2159 = data
  i2158.m_Alpha = i2159[0]
  i2158.m_Interactable = !!i2159[1]
  i2158.m_BlocksRaycasts = !!i2159[2]
  i2158.m_IgnoreParentGroups = !!i2159[3]
  i2158.enabled = !!i2159[4]
  return i2158
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2161 = data
  i2160.m_EffectColor = new pc.Color(i2161[0], i2161[1], i2161[2], i2161[3])
  i2160.m_EffectDistance = new pc.Vec2( i2161[4], i2161[5] )
  i2160.m_UseGraphicAlpha = !!i2161[6]
  return i2160
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i2162 = root || request.c( 'WinScreenWidget' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'RaceCar')
  request.r(i2163[2], i2163[3], 0, i2162, 'WheatText')
  request.r(i2163[4], i2163[5], 0, i2162, 'GemText')
  request.r(i2163[6], i2163[7], 0, i2162, 'GameManager')
  request.r(i2163[8], i2163[9], 0, i2162, 'products')
  return i2162
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.Button' )
  var i2165 = data
  i2164.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2165[0], i2164.m_OnClick)
  i2164.m_Navigation = request.d('UnityEngine.UI.Navigation', i2165[1], i2164.m_Navigation)
  i2164.m_Transition = i2165[2]
  i2164.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2165[3], i2164.m_Colors)
  i2164.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2165[4], i2164.m_SpriteState)
  i2164.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2165[5], i2164.m_AnimationTriggers)
  i2164.m_Interactable = !!i2165[6]
  request.r(i2165[7], i2165[8], 0, i2164, 'm_TargetGraphic')
  return i2164
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2167 = data
  i2166.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2167[0], i2166.m_PersistentCalls)
  return i2166
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2169 = data
  i2168.m_Mode = i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'm_SelectOnUp')
  request.r(i2169[3], i2169[4], 0, i2168, 'm_SelectOnDown')
  request.r(i2169[5], i2169[6], 0, i2168, 'm_SelectOnLeft')
  request.r(i2169[7], i2169[8], 0, i2168, 'm_SelectOnRight')
  return i2168
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2171 = data
  i2170.m_NormalColor = new pc.Color(i2171[0], i2171[1], i2171[2], i2171[3])
  i2170.m_HighlightedColor = new pc.Color(i2171[4], i2171[5], i2171[6], i2171[7])
  i2170.m_PressedColor = new pc.Color(i2171[8], i2171[9], i2171[10], i2171[11])
  i2170.m_SelectedColor = new pc.Color(i2171[12], i2171[13], i2171[14], i2171[15])
  i2170.m_DisabledColor = new pc.Color(i2171[16], i2171[17], i2171[18], i2171[19])
  i2170.m_ColorMultiplier = i2171[20]
  i2170.m_FadeDuration = i2171[21]
  return i2170
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2173 = data
  request.r(i2173[0], i2173[1], 0, i2172, 'm_HighlightedSprite')
  request.r(i2173[2], i2173[3], 0, i2172, 'm_PressedSprite')
  request.r(i2173[4], i2173[5], 0, i2172, 'm_SelectedSprite')
  request.r(i2173[6], i2173[7], 0, i2172, 'm_DisabledSprite')
  return i2172
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2175 = data
  i2174.m_NormalTrigger = i2175[0]
  i2174.m_HighlightedTrigger = i2175[1]
  i2174.m_PressedTrigger = i2175[2]
  i2174.m_SelectedTrigger = i2175[3]
  i2174.m_DisabledTrigger = i2175[4]
  return i2174
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i2176 = root || request.c( 'EndGameButton' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'GameManager')
  return i2176
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'm_ObjectArgument')
  i2178.m_ObjectArgumentAssemblyTypeName = i2179[2]
  i2178.m_IntArgument = i2179[3]
  i2178.m_FloatArgument = i2179[4]
  i2178.m_StringArgument = i2179[5]
  i2178.m_BoolArgument = !!i2179[6]
  return i2178
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_FillRect')
  request.r(i2181[2], i2181[3], 0, i2180, 'm_HandleRect')
  i2180.m_Direction = i2181[4]
  i2180.m_MinValue = i2181[5]
  i2180.m_MaxValue = i2181[6]
  i2180.m_WholeNumbers = !!i2181[7]
  i2180.m_Value = i2181[8]
  i2180.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2181[9], i2180.m_OnValueChanged)
  i2180.m_Navigation = request.d('UnityEngine.UI.Navigation', i2181[10], i2180.m_Navigation)
  i2180.m_Transition = i2181[11]
  i2180.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2181[12], i2180.m_Colors)
  i2180.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2181[13], i2180.m_SpriteState)
  i2180.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2181[14], i2180.m_AnimationTriggers)
  i2180.m_Interactable = !!i2181[15]
  request.r(i2181[16], i2181[17], 0, i2180, 'm_TargetGraphic')
  return i2180
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2183 = data
  i2182.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2183[0], i2182.m_PersistentCalls)
  return i2182
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i2184 = root || request.c( 'WheatSliderWidget' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'Slider')
  request.r(i2185[2], i2185[3], 0, i2184, 'gameManager')
  request.r(i2185[4], i2185[5], 0, i2184, 'BarIconImage')
  request.r(i2185[6], i2185[7], 0, i2184, 'WheatImage')
  i2184.MaxWheat = i2185[8]
  request.r(i2185[9], i2185[10], 0, i2184, 'products')
  return i2184
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i2186 = root || request.c( 'LongTapButton' )
  var i2187 = data
  i2186.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2187[0], i2186.OnMouseDownEvent)
  i2186.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2187[1], i2186.OnMouseUpEvent)
  return i2186
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i2188 = root || request.c( 'HealthBar' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'Slider')
  request.r(i2189[2], i2189[3], 0, i2188, 'HealthProvider')
  request.r(i2189[4], i2189[5], 0, i2188, 'BarIconImage')
  return i2188
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i2190 = root || request.c( 'ShootButtonCtrl' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'txtPew')
  request.r(i2191[2], i2191[3], 0, i2190, 'txtNoAmmo')
  request.r(i2191[4], i2191[5], 0, i2190, 'products')
  request.r(i2191[6], i2191[7], 0, i2190, 'localization')
  return i2190
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2193 = data
  i2192.m_Spacing = i2193[0]
  i2192.m_ChildForceExpandWidth = !!i2193[1]
  i2192.m_ChildForceExpandHeight = !!i2193[2]
  i2192.m_ChildControlWidth = !!i2193[3]
  i2192.m_ChildControlHeight = !!i2193[4]
  i2192.m_ChildScaleWidth = !!i2193[5]
  i2192.m_ChildScaleHeight = !!i2193[6]
  i2192.m_Padding = UnityEngine.RectOffset.FromPaddings(i2193[7], i2193[8], i2193[9], i2193[10])
  i2192.m_ChildAlignment = i2193[11]
  return i2192
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i2194 = root || request.c( 'BoostsPanelCtrl' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'boosts')
  request.r(i2195[2], i2195[3], 0, i2194, 'wgtBoostPrefab')
  return i2194
}

Deserializers["RocketsPanelCtrl"] = function (request, data, root) {
  var i2196 = root || request.c( 'RocketsPanelCtrl' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'products')
  request.r(i2197[2], i2197[3], 0, i2196, 'rocketPrefab')
  return i2196
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i2198 = root || request.c( 'ShieldBar' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'slider')
  request.r(i2199[2], i2199[3], 0, i2198, 'healthController')
  request.r(i2199[4], i2199[5], 0, i2198, 'barIconImage')
  request.r(i2199[6], i2199[7], 0, i2198, 'allUI')
  return i2198
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i2200 = root || request.c( 'TimeSinceStartup' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'Text')
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.atlasId = i2203[1]
  i2202.mipmapCount = i2203[2]
  i2202.hdr = !!i2203[3]
  i2202.size = i2203[4]
  i2202.anisoLevel = i2203[5]
  i2202.filterMode = i2203[6]
  i2202.wrapMode = i2203[7]
  var i2205 = i2203[8]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 4) {
    i2204.push( UnityEngine.Rect.MinMaxRect(i2205[i + 0], i2205[i + 1], i2205[i + 2], i2205[i + 3]) );
  }
  i2202.rects = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.index = i2209[1]
  i2208.startup = !!i2209[2]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2211 = data
  i2210.ambientIntensity = i2211[0]
  i2210.reflectionIntensity = i2211[1]
  i2210.ambientMode = i2211[2]
  i2210.ambientLight = new pc.Color(i2211[3], i2211[4], i2211[5], i2211[6])
  i2210.ambientSkyColor = new pc.Color(i2211[7], i2211[8], i2211[9], i2211[10])
  i2210.ambientGroundColor = new pc.Color(i2211[11], i2211[12], i2211[13], i2211[14])
  i2210.ambientEquatorColor = new pc.Color(i2211[15], i2211[16], i2211[17], i2211[18])
  i2210.fogColor = new pc.Color(i2211[19], i2211[20], i2211[21], i2211[22])
  i2210.fogEndDistance = i2211[23]
  i2210.fogStartDistance = i2211[24]
  i2210.fogDensity = i2211[25]
  i2210.fog = !!i2211[26]
  request.r(i2211[27], i2211[28], 0, i2210, 'skybox')
  i2210.fogMode = i2211[29]
  var i2213 = i2211[30]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2213[i + 0]) );
  }
  i2210.lightmaps = i2212
  i2210.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2211[31], i2210.lightProbes)
  i2210.lightmapsMode = i2211[32]
  i2210.environmentLightingMode = i2211[33]
  i2210.ambientProbe = new pc.SphericalHarmonicsL2(i2211[34])
  request.r(i2211[35], i2211[36], 0, i2210, 'customReflection')
  request.r(i2211[37], i2211[38], 0, i2210, 'defaultReflection')
  i2210.defaultReflectionMode = i2211[39]
  i2210.defaultReflectionResolution = i2211[40]
  i2210.sunLightObjectId = i2211[41]
  i2210.pixelLightCount = i2211[42]
  i2210.defaultReflectionHDR = !!i2211[43]
  i2210.hasLightDataAsset = !!i2211[44]
  i2210.hasManualGenerate = !!i2211[45]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'lightmapColor')
  request.r(i2217[2], i2217[3], 0, i2216, 'lightmapDirection')
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2218 = root || new UnityEngine.LightProbes()
  var i2219 = data
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2227 = data
  i2226.name = i2227[0]
  var i2229 = i2227[1]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2229[i + 0]) );
  }
  i2226.passes = i2228
  var i2231 = i2227[2]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2231[i + 0]) );
  }
  i2226.defaultParameterValues = i2230
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2234 = root || new pc.UnityShaderPass()
  var i2235 = data
  i2234.passType = i2235[0]
  i2234.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[1], i2234.zTest)
  i2234.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[2], i2234.zWrite)
  i2234.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[3], i2234.culling)
  i2234.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2235[4], i2234.blending)
  i2234.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2235[5], i2234.alphaBlending)
  i2234.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[6], i2234.colorWriteMask)
  i2234.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[7], i2234.offsetUnits)
  i2234.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[8], i2234.offsetFactor)
  i2234.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[9], i2234.stencilRef)
  i2234.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[10], i2234.stencilReadMask)
  i2234.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2235[11], i2234.stencilWriteMask)
  i2234.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2235[12], i2234.stencilOp)
  i2234.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2235[13], i2234.stencilOpFront)
  i2234.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2235[14], i2234.stencilOpBack)
  var i2237 = i2235[15]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2237[i + 0]) );
  }
  i2234.tags = i2236
  var i2239 = i2235[16]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2239[i + 0]) );
  }
  i2234.variants = i2238
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2241 = data
  i2240.val = i2241[0]
  i2240.name = i2241[1]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2243 = data
  i2242.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[0], i2242.src)
  i2242.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[1], i2242.dst)
  i2242.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[2], i2242.op)
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2245 = data
  i2244.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[0], i2244.pass)
  i2244.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[1], i2244.fail)
  i2244.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[2], i2244.zFail)
  i2244.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2245[3], i2244.comp)
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.value = i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( i2255[i + 0] );
  }
  i2252.keywords = i2254
  i2252.vertexProgram = i2253[1]
  i2252.fragmentProgram = i2253[2]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.type = i2261[1]
  i2260.value = new pc.Vec4( i2261[2], i2261[3], i2261[4], i2261[5] )
  i2260.textureValue = i2261[6]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2263 = data
  i2262.name = i2263[0]
  request.r(i2263[1], i2263[2], 0, i2262, 'texture')
  i2262.aabb = i2263[3]
  i2262.vertices = i2263[4]
  i2262.triangles = i2263[5]
  i2262.textureRect = UnityEngine.Rect.MinMaxRect(i2263[6], i2263[7], i2263[8], i2263[9])
  i2262.packedRect = UnityEngine.Rect.MinMaxRect(i2263[10], i2263[11], i2263[12], i2263[13])
  i2262.border = new pc.Vec4( i2263[14], i2263[15], i2263[16], i2263[17] )
  i2262.transparency = i2263[18]
  i2262.bounds = i2263[19]
  i2262.pixelsPerUnit = i2263[20]
  i2262.textureWidth = i2263[21]
  i2262.textureHeight = i2263[22]
  i2262.nativeSize = new pc.Vec2( i2263[23], i2263[24] )
  i2262.pivot = new pc.Vec2( i2263[25], i2263[26] )
  i2262.textureRectOffset = new pc.Vec2( i2263[27], i2263[28] )
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.wrapMode = i2265[1]
  i2264.isLooping = !!i2265[2]
  i2264.length = i2265[3]
  var i2267 = i2265[4]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2267[i + 0]) );
  }
  i2264.curves = i2266
  var i2269 = i2265[5]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2269[i + 0]) );
  }
  i2264.events = i2268
  i2264.halfPrecision = !!i2265[6]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2273 = data
  i2272.path = i2273[0]
  i2272.componentType = i2273[1]
  i2272.property = i2273[2]
  i2272.keys = i2273[3]
  var i2275 = i2273[4]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2275[i + 0]) );
  }
  i2272.objectReferenceKeys = i2274
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2279 = data
  i2278.time = i2279[0]
  request.r(i2279[1], i2279[2], 0, i2278, 'value')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2283 = data
  i2282.functionName = i2283[0]
  i2282.floatParameter = i2283[1]
  i2282.intParameter = i2283[2]
  i2282.stringParameter = i2283[3]
  request.r(i2283[4], i2283[5], 0, i2282, 'objectReferenceParameter')
  i2282.time = i2283[6]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2285 = data
  i2284.name = i2285[0]
  i2284.ascent = i2285[1]
  i2284.originalLineHeight = i2285[2]
  i2284.fontSize = i2285[3]
  var i2287 = i2285[4]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2287[i + 0]) );
  }
  i2284.characterInfo = i2286
  request.r(i2285[5], i2285[6], 0, i2284, 'texture')
  i2284.originalFontSize = i2285[7]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2291 = data
  i2290.index = i2291[0]
  i2290.advance = i2291[1]
  i2290.bearing = i2291[2]
  i2290.glyphWidth = i2291[3]
  i2290.glyphHeight = i2291[4]
  i2290.minX = i2291[5]
  i2290.maxX = i2291[6]
  i2290.minY = i2291[7]
  i2290.maxY = i2291[8]
  i2290.uvBottomLeftX = i2291[9]
  i2290.uvBottomLeftY = i2291[10]
  i2290.uvBottomRightX = i2291[11]
  i2290.uvBottomRightY = i2291[12]
  i2290.uvTopLeftX = i2291[13]
  i2290.uvTopLeftY = i2291[14]
  i2290.uvTopRightX = i2291[15]
  i2290.uvTopRightY = i2291[16]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2293 = data
  i2292.name = i2293[0]
  var i2295 = i2293[1]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2295[i + 0]) );
  }
  i2292.states = i2294
  var i2297 = i2293[2]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2297[i + 0]) );
  }
  i2292.layers = i2296
  var i2299 = i2293[3]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2299[i + 0]) );
  }
  i2292.parameters = i2298
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2303 = data
  i2302.cycleOffset = i2303[0]
  i2302.cycleOffsetParameter = i2303[1]
  i2302.cycleOffsetParameterActive = !!i2303[2]
  i2302.mirror = !!i2303[3]
  i2302.mirrorParameter = i2303[4]
  i2302.mirrorParameterActive = !!i2303[5]
  i2302.motionId = i2303[6]
  i2302.nameHash = i2303[7]
  i2302.fullPathHash = i2303[8]
  i2302.speed = i2303[9]
  i2302.speedParameter = i2303[10]
  i2302.speedParameterActive = !!i2303[11]
  i2302.tag = i2303[12]
  i2302.name = i2303[13]
  i2302.writeDefaultValues = !!i2303[14]
  var i2305 = i2303[15]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2305[i + 0]) );
  }
  i2302.transitions = i2304
  var i2307 = i2303[16]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 2, i2306, '')
  }
  i2302.behaviours = i2306
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2311 = data
  i2310.fullPath = i2311[0]
  i2310.canTransitionToSelf = !!i2311[1]
  i2310.duration = i2311[2]
  i2310.exitTime = i2311[3]
  i2310.hasExitTime = !!i2311[4]
  i2310.hasFixedDuration = !!i2311[5]
  i2310.interruptionSource = i2311[6]
  i2310.offset = i2311[7]
  i2310.orderedInterruption = !!i2311[8]
  i2310.destinationStateNameHash = i2311[9]
  i2310.destinationStateMachineId = i2311[10]
  i2310.isExit = !!i2311[11]
  i2310.mute = !!i2311[12]
  i2310.solo = !!i2311[13]
  var i2313 = i2311[14]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2313[i + 0]) );
  }
  i2310.conditions = i2312
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2319 = data
  i2318.blendingMode = i2319[0]
  i2318.defaultWeight = i2319[1]
  i2318.name = i2319[2]
  i2318.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2319[3], i2318.stateMachine)
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2321 = data
  i2320.id = i2321[0]
  i2320.defaultStateNameHash = i2321[1]
  var i2323 = i2321[2]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2323[i + 0]) );
  }
  i2320.entryTransitions = i2322
  var i2325 = i2321[3]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2325[i + 0]) );
  }
  i2320.anyStateTransitions = i2324
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2329 = data
  i2328.destinationStateNameHash = i2329[0]
  i2328.destinationStateMachineId = i2329[1]
  i2328.isExit = !!i2329[2]
  i2328.mute = !!i2329[3]
  i2328.solo = !!i2329[4]
  var i2331 = i2329[5]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2331[i + 0]) );
  }
  i2328.conditions = i2330
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2335 = data
  i2334.defaultBool = !!i2335[0]
  i2334.defaultFloat = i2335[1]
  i2334.defaultInt = i2335[2]
  i2334.name = i2335[3]
  i2334.nameHash = i2335[4]
  i2334.type = i2335[5]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.bytes64 = i2337[1]
  i2336.data = i2337[2]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2341[i + 0]) );
  }
  i2338.files = i2340
  i2338.componentToPrefabIds = i2339[1]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2345 = data
  i2344.path = i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'unityObject')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2347 = data
  var i2349 = i2347[0]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2349[i + 0]) );
  }
  i2346.scriptsExecutionOrder = i2348
  var i2351 = i2347[1]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2351[i + 0]) );
  }
  i2346.sortingLayers = i2350
  var i2353 = i2347[2]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2353[i + 0]) );
  }
  i2346.cullingLayers = i2352
  i2346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2347[3], i2346.timeSettings)
  i2346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2347[4], i2346.physicsSettings)
  i2346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2347[5], i2346.physics2DSettings)
  i2346.removeShadows = !!i2347[6]
  i2346.autoInstantiatePrefabs = !!i2347[7]
  i2346.enableAutoInstancing = !!i2347[8]
  i2346.lightmapEncodingQuality = i2347[9]
  i2346.desiredColorSpace = i2347[10]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.value = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2361 = data
  i2360.id = i2361[0]
  i2360.name = i2361[1]
  i2360.value = i2361[2]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2365 = data
  i2364.id = i2365[0]
  i2364.name = i2365[1]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2367 = data
  i2366.fixedDeltaTime = i2367[0]
  i2366.maximumDeltaTime = i2367[1]
  i2366.timeScale = i2367[2]
  i2366.maximumParticleTimestep = i2367[3]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2369 = data
  i2368.gravity = new pc.Vec3( i2369[0], i2369[1], i2369[2] )
  i2368.defaultSolverIterations = i2369[3]
  i2368.autoSyncTransforms = !!i2369[4]
  i2368.autoSimulation = !!i2369[5]
  var i2371 = i2369[6]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2371[i + 0]) );
  }
  i2368.collisionMatrix = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.layerId = i2375[1]
  i2374.otherLayerId = i2375[2]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'material')
  i2376.gravity = new pc.Vec2( i2377[2], i2377[3] )
  i2376.positionIterations = i2377[4]
  i2376.velocityIterations = i2377[5]
  i2376.velocityThreshold = i2377[6]
  i2376.maxLinearCorrection = i2377[7]
  i2376.maxAngularCorrection = i2377[8]
  i2376.maxTranslationSpeed = i2377[9]
  i2376.maxRotationSpeed = i2377[10]
  i2376.timeToSleep = i2377[11]
  i2376.linearSleepTolerance = i2377[12]
  i2376.angularSleepTolerance = i2377[13]
  i2376.defaultContactOffset = i2377[14]
  i2376.autoSimulation = !!i2377[15]
  i2376.queriesHitTriggers = !!i2377[16]
  i2376.queriesStartInColliders = !!i2377[17]
  i2376.callbacksOnDisable = !!i2377[18]
  i2376.reuseCollisionCallbacks = !!i2377[19]
  i2376.autoSyncTransforms = !!i2377[20]
  var i2379 = i2377[21]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2379[i + 0]) );
  }
  i2376.collisionMatrix = i2378
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.layerId = i2383[1]
  i2382.otherLayerId = i2383[2]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2387 = data
  i2386.weight = i2387[0]
  i2386.vertices = i2387[1]
  i2386.normals = i2387[2]
  i2386.tangents = i2387[3]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2391 = data
  i2390.mode = i2391[0]
  i2390.parameter = i2391[1]
  i2390.threshold = i2391[2]
  return i2390
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[45],"96":[51],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[27],"103":[27],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[105],"113":[105],"114":[105],"115":[105],"116":[105],"117":[105],"118":[51],"119":[10],"120":[121],"122":[121],"72":[18],"13":[15],"123":[18],"78":[77],"31":[28],"30":[39],"32":[28],"124":[125],"126":[18],"127":[19,18],"74":[72],"21":[19,18],"128":[18],"73":[72],"129":[18],"130":[18],"82":[18],"131":[18],"25":[18],"132":[18],"133":[18],"134":[18],"135":[19,18],"136":[19,18],"137":[18],"138":[18],"139":[18],"79":[18],"24":[19,18],"140":[18],"141":[70],"142":[70],"71":[70],"143":[70],"144":[51],"145":[51],"146":[18],"147":[19,18],"148":[10],"149":[19,18],"150":[19,18],"151":[10,19,18],"152":[18,19],"153":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UIActiveBoost","UnityEngine.UI.Text","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.Rigidbody","CarController","UnityEngine.GameObject","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","HealthBar","TrackContentGenerator","WheatGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","UnityEngine.UI.Slider","WheatSliderWidget","ShootButtonCtrl","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","RocketsPanelCtrl","ShieldBar","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

