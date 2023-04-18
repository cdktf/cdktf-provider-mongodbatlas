# `data_mongodbatlas_access_list_api_key`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_access_list_api_key`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key).

# `dataMongodbatlasAccessListApiKey` Submodule <a name="`dataMongodbatlasAccessListApiKey` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAccessListApiKey <a name="DataMongodbatlasAccessListApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key mongodbatlas_access_list_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_key

dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key_id: str,
  ip_address: str,
  org_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.apiKeyId">api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#api_key_id DataMongodbatlasAccessListApiKey#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#ip_address DataMongodbatlasAccessListApiKey#ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#org_id DataMongodbatlasAccessListApiKey#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#id DataMongodbatlasAccessListApiKey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.apiKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#api_key_id DataMongodbatlasAccessListApiKey#api_key_id}.

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#ip_address DataMongodbatlasAccessListApiKey#ip_address}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#org_id DataMongodbatlasAccessListApiKey#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#id DataMongodbatlasAccessListApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_key

dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_key

dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_key

dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.accessCount">access_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.lastUsed">last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.lastUsedAddress">last_used_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.apiKeyIdInput">api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.apiKeyId">api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_count`<sup>Required</sup> <a name="access_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.accessCount"></a>

```python
access_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_used`<sup>Required</sup> <a name="last_used" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.lastUsed"></a>

```python
last_used: str
```

- *Type:* str

---

##### `last_used_address`<sup>Required</sup> <a name="last_used_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.lastUsedAddress"></a>

```python
last_used_address: str
```

- *Type:* str

---

##### `api_key_id_input`<sup>Optional</sup> <a name="api_key_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.apiKeyIdInput"></a>

```python
api_key_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.apiKeyId"></a>

```python
api_key_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAccessListApiKeyConfig <a name="DataMongodbatlasAccessListApiKeyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_access_list_api_key

dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key_id: str,
  ip_address: str,
  org_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.apiKeyId">api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#api_key_id DataMongodbatlasAccessListApiKey#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#ip_address DataMongodbatlasAccessListApiKey#ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#org_id DataMongodbatlasAccessListApiKey#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#id DataMongodbatlasAccessListApiKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.apiKeyId"></a>

```python
api_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#api_key_id DataMongodbatlasAccessListApiKey#api_key_id}.

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#ip_address DataMongodbatlasAccessListApiKey#ip_address}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#org_id DataMongodbatlasAccessListApiKey#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKey.DataMongodbatlasAccessListApiKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/access_list_api_key#id DataMongodbatlasAccessListApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



